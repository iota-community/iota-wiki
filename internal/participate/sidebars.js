module.exports = {
  participate: [
    {
      type: 'category',
      label: 'Support The Network',
      collapsed: false,
      items: [
        'support-the-network/about-nodes',
        'support-the-network/become-a-node-operator',
        'support-the-network/node-software',
        'support-the-network/create-an-application',
      ],
    },
    {
      type: 'category',
      label: 'The Community',
      collapsed: true,
      items: [
        'the-community/discord',
        'the-community/x-teams',
        'the-community/git-hub',
        'the-community/social-media',
      ],
    },
    {
      type: 'category',
      label: 'Partnerships',
      collapsed: true,
      items: ['partnerships/iota-partnerships'],
    },
    {
      type: 'category',
      label: 'Funding',
      collapsed: true,
      items: ['funding/edf-funding', 'funding/community-treasury'],
    },
    {
      type: 'category',
      label: 'Use Cases',
      collapsed: true,
      items: [
        'use-cases/industry-applications',
        'use-cases/internet-of-things',
        'use-cases/digital-assets',
        'use-cases/nfts',
        'use-cases/data-confidence',
        'use-cases/eco-social-projects',
        'use-cases/private-tangle',
      ],
    },
    {
      type: 'category',
      label: 'Frameworks',
      collapsed: true,
      items: [
        'frameworks/introduction',
        'frameworks/streams',
        'frameworks/identity',
        'frameworks/smart-contracts',
        'frameworks/access',
        'frameworks/stronghold',
        'frameworks/oracles',
        {
          type: 'category',
          label: 'Utilities',
          collapsed: true,
          items: [
            'frameworks/utilities/tangle-explorer',
            'frameworks/utilities/visualizer',
            'frameworks/utilities/iota-ipfs',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contribute To Wiki',
      collapsed: true,
      items: [
        'contribute-to-wiki/welcome',
        {
          type: 'category',
          label: 'For Community',
          items: ['contribute-to-wiki/for_community/community_guide'],
        },
        {
          type: 'category',
          label: 'For Developers',
          items: [
            {
              type: 'doc',
              label: "Developer's Guide",
              id: 'contribute-to-wiki/for_devs/developer_guide',
            },
            {
              type: 'category',
              label: 'Toolbox',
              items: [
                {
                  type: 'doc',
                  label: 'Introduction',
                  id: 'contribute-to-wiki/for_devs/toolbox/toolbox',
                },
                {
                  type: 'doc',
                  label: 'The Right Questions',
                  id: 'contribute-to-wiki/for_devs/toolbox/questions',
                },
                {
                  type: 'doc',
                  label: 'Mind Map',
                  id: 'contribute-to-wiki/for_devs/toolbox/mind_map',
                },
              ],
            },
            {
              type: 'doc',
              label: 'Request a Technical Writer',
              id: 'contribute-to-wiki/for_devs/request_tw',
            },
          ],
        },
        {
          type: 'category',
          label: 'For Writers',
          items: [
            {
              type: 'doc',
              label: "Technical Writer's Guide",
              id: 'contribute-to-wiki/for_tws/writer_guide',
            },
            {
              type: 'doc',
              label: 'Style Guide',
              id: 'contribute-to-wiki/for_tws/style_guide',
            },
            {
              type: 'doc',
              label: 'Internal Review Process',
              id: 'contribute-to-wiki/for_tws/internal_review',
            },
          ],
        },
      ],
    },
  ],
};
