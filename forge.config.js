/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const config = {
  packagerConfig: {
    appBundleId: 'ImageNameManager',
    appVersion: '1.0.0',
    icon: path.join(__dirname, 'electron/assets', 'icon'),
    name: 'Image Name Manager',
    win32metadata: {
      CompanyName: 'Aps First',
      ProductName: 'Image Name Manager',
      OriginalFilename: 'ImageNameManager'
    }
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: path.join(__dirname, 'electron/assets', 'icon.ico'),
        loadingGif: path.join(__dirname, 'electron/assets', 'installing.gif'),
        name: 'ImageNameManager',
        setupExe: 'ImageNameManager.exe',
        setupIcon: path.join(__dirname, 'electron/assets', 'icon.ico'),
        title: 'ImageNameManager'
      }
    },
    {
      name: '@electron-forge/maker-dmg',
      platforms: ['darwin'],
      config: {
        format: 'ULFO',
        icon: path.join(__dirname, 'electron/assets', 'icon.icns'),
        name: 'Image Name Manager'
      }
    },
    {
      name: '@electron-forge/maker-pkg',
      platforms: ['mas'],
      config: {
        install: '/Applications'
      }
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        genericName: 'Image Name Manger',
        icon: path.join(__dirname, 'electron/assets', 'icon.png'),
        productName: 'Image Name Manager'
      }
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        genericName: 'Image Name Manger',
        icon: path.join(__dirname, 'electron/assets', 'icon.png'),
        productName: 'Image Name Manager'
      }
    },
    {
      name: '@electron-forge/maker-appx',
      config: {
        assets: 'assets',
        identityName: 'ImageNameManager',
        manifest: 'appxmanifest.xml',
        packageDescription: 'Change image names and edit exif data.',
        packageName: 'Image Name Manager',
        publisherDisplayName: 'Apps First'
      }
    }
  ],
  plugins: [
    [
      '@electron-forge/plugin-webpack',
      {
        mainConfig: './webpack.config.main.js',
        renderer: {
          config: './webpack.config.renderer.js',
          entryPoints: [
            {
              html: './src/index.html',
              js: './src/index.tsx',
              name: 'main_window'
              // 'preload': {
              //   "js": './electron/bridge.ts'
              // }
            }
          ]
        }
      }
    ]
  ]
};

module.exports = config;
