export default {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog\n\nAll notable changes to this project will be documented in this file.'
      }
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false
      }
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd: `
          # Install yq if missed
          if ! command -v yq &> /dev/null; then
            wget -qO /tmp/yq https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64
            chmod +x /tmp/yq
            YQ_CMD="/tmp/yq"
          else
            YQ_CMD="yq"
          fi
          
          #  Update Chart.yaml with yq
          $YQ_CMD eval '.version = "${nextRelease.version}"' -i helm/Chart.yaml
          $YQ_CMD eval '.appVersion = "${nextRelease.version}"' -i helm/Chart.yaml
          `
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json', 
          'package-lock.json', 
          'CHANGELOG.md',
          'helm/Chart.yaml'
        ],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github'
  ]
};