import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { usePluralForm } from '@docusaurus/theme-common';
import { useHistory, useLocation } from '@docusaurus/router';
import { sortedTutorials, TagType, Tutorial } from '@site/src/data/tutorials';
import React, { useState, useEffect, useMemo } from 'react';
import { useCallback } from 'react';
import SearchBar, { readSearchName } from '../../SearchBar';
import Select, { ActionMeta } from 'react-select';
import useIsBrowser from '@docusaurus/useIsBrowser';

import './styles.css';

import config from '@site/tutorials.json';
import Collapsible from 'react-collapsible';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

const TagQueryStringKey = 'tags';

function readSearchTags(search: string): TagType[] {
  return new URLSearchParams(search).getAll(TagQueryStringKey) as TagType[];
}

function restoreUserState(userState: UserState | null) {
  const { scrollTopPosition, focusedElementId } = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };

  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({ top: scrollTopPosition });
}

function filterTutorials(
  tutorials: Tutorial[],
  selectedTags: TagType[],
  searchName: string | null,
) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    tutorials = tutorials.filter((tutorial) =>
      tutorial.title.toLowerCase().includes(searchName.toLowerCase()),
    );
  }
  if (selectedTags.length === 0) {
    return tutorials;
  }
  return tutorials.filter((tutorial) => {
    if (tutorial.tags.length === 0) {
      return false;
    }
    return selectedTags.every((tag) => tutorial.tags.includes(tag));
  });
}

function useSiteCountPlural() {
  const { selectMessage } = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(sitesCount, '1 result|' + sitesCount + ' results');
}

function getItems(actionMeta: ActionMeta<any>): TagType[] {
  const items = [];
  switch (actionMeta.action) {
    case 'select-option':
      items.push(actionMeta.option);
      break;
    case 'deselect-option':
      items.push(actionMeta.option);
      break;
    case 'remove-value':
      items.push(actionMeta.removedValue);
      break;
    case 'pop-value':
      items.push(actionMeta.removedValue);
      break;
    case 'clear':
      items.push(...actionMeta.removedValues);
      break;
  }

  return items.map((item) => {
    return item['value'];
  });
}

function toggleListItem<T>(list: T[], newItems: T[]): T[] {
  let newList = [...list];
  newItems.forEach((item) => {
    const itemIndex = newList.indexOf(item);
    if (itemIndex === -1) {
      newList = newList.concat(item);
    } else {
      newList.splice(itemIndex, 1);
    }
  });
  return newList;
}

function replaceSearchTags(search: string, newTags: TagType[]) {
  const searchParams = new URLSearchParams(search);
  searchParams.delete(TagQueryStringKey);
  newTags.forEach((tag) => searchParams.append(TagQueryStringKey, tag));
  return searchParams.toString();
}

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

export function useFilteredTutorials() {
  const location = useLocation<UserState>();
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  return useMemo(
    () => filterTutorials(sortedTutorials, selectedTags, searchName),
    [selectedTags, searchName],
  );
}

function TutorialFilters() {
  const location = useLocation();
  const history = useHistory();
  const filteredTutorials = useFilteredTutorials();
  const siteCountPlural = useSiteCountPlural();

  const [isOpen, setIsOpen] = useState(false);

  const changeTags = useCallback(
    (_, actionMeta) => {
      const items = getItems(actionMeta);
      const tags = readSearchTags(location.search);
      const newTags = toggleListItem(tags, items);
      const newSearch = replaceSearchTags(location.search, newTags);
      history.push({
        ...location,
        search: newSearch,
        state: prepareUserState(),
      });
    },
    [history, location],
  );

  const selectProps = {
    isMulti: true,
    onChange: changeTags,
    menuPortalTarget: null,
    className: 'react-select-container',
    classNamePrefix: 'react-select',
  };

  if (useIsBrowser()) {
    selectProps.menuPortalTarget = document.body;
  }

  return (
    <section className='container margin-top--l margin-bottom--lg'>
      <div className='row'>
        <div className='col col--6'>
          <SearchBar />
        </div>
        <div className='col col--2 col--offset-4'>
          <button
            className='button filter-button'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='material-icons margin-right--md'>filter_list</span>
            Filter
          </button>
        </div>
      </div>
      <Collapsible trigger='' triggerDisabled={true} open={isOpen}>
        <div className='row'>
          <div className='col col--3'>
            <h5>Type</h5>
            <Select
              placeholder='Type'
              options={config.typeOptions}
              {...selectProps}
            />
          </div>
          <div className='col col--3'>
            <h5>Topic</h5>
            <Select
              placeholder='Topic'
              options={config.topicOptions}
              {...selectProps}
            />
          </div>
          <div className='col col--3'>
            <h5>Frameworks</h5>
            <Select
              placeholder='Frameworks'
              options={config.frameworkOptions}
              {...selectProps}
            />
          </div>
          <div className='col col--3'>
            <h5>Languages</h5>
            <Select
              placeholder='Languages'
              options={config.languageOptions}
              {...selectProps}
            />
          </div>
        </div>
      </Collapsible>
      <div className='row margin-vert--lg'>
        <div className='col'>
          <span>{siteCountPlural(filteredTutorials.length)}</span>
        </div>
        <div className='col col--2 tutorial-link'>
          <span>+</span>
          <a
            className='tutorial-link__anchor'
            href={config.edit_url}
            target='_blank'
            rel='noreferrer'
          >
            Add your tutorial
          </a>
        </div>
      </div>
    </section>
  );
}

export default TutorialFilters;