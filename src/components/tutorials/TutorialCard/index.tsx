/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo } from 'react';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';

import './styles.css';
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import Tooltip from '../../tutorials/TutorialTooltip';
import {
  Tags,
  TagList,
  type TagType,
  type Tutorial,
  type Tag,
} from '@site/src/data/tutorials';
import { sortBy } from '@site/src/utils/jsUtils';

interface Props extends Tag {
  color: string;
  label: string;
  description: string;
}

const TagComp = React.forwardRef<HTMLLIElement, Props>(
  ({ label, color, description }, ref) => (
    <li ref={ref} className='tag' title={description}>
      <span className='text-label'>{label.toLowerCase()}</span>
      <span className='color-label' style={{ backgroundColor: color }} />
    </li>
  ),
);
TagComp.displayName = 'TagComponent';

function TutorialCardTag({ tags }: { tags: TagType[] }) {
  const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `tutorial_card_tag_${tagObject.tag}`;

        return (
          <Tooltip
            key={index}
            text={tagObject.description}
            anchorEl='#__docusaurus'
            id={id}
          >
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        );
      })}
    </>
  );
}

const TutorialCard = memo(({ tutorial }: { tutorial: Tutorial }) => (
  <li key={tutorial.title} className='card shadow--md'>
    <div className='card__image tutorial-card-image'>
      <Image img={tutorial.preview} alt={tutorial.title} />
    </div>
    <div className='card__body'>
      <div className='tutorial-card-header'>
        <h4 className='tutorial-card-title'>
          <Link href={tutorial.website} className='tutorialCardLink'>
            {tutorial.title}
          </Link>
        </h4>
        {tutorial.tags.includes('favorite') && (
          <FavoriteIcon svgClass='svg-icon-favorite' size='small' />
        )}
        {tutorial.source && (
          <Link
            href={tutorial.source}
            className='button button--secondary button--sm tutorial-card-src-btn'
          >
            source
          </Link>
        )}
      </div>
      <p className='tutorial-card-body'>{tutorial.description}</p>
    </div>
    <ul className='card__footer card-footer'>
      <TutorialCardTag tags={tutorial.tags} />
    </ul>
  </li>
));
TutorialCard.displayName = 'TutorialCard';

export default TutorialCard;
