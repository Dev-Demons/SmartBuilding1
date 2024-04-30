# Intercom Chat Page

https://intercom.decentraland.org

## How to open it

```js
  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth
  const popupHeight = Math.min(700, windowHeight)
  const popupWidth = Math.min(400, windowWidth)
  const top = Math.max(windowHeight - popupHeight, 0)
  const left = Math.max(windowWidth - popupWidth - 20, 0)

  window.open('https://intercom.decentraland.org', 'intercom', `popup,top=${top},left=${left},width=${popupWidth},height=${popupHeight}`)
```

https://user-images.githubusercontent.com/208789/225624472-da5a7bc2-af8a-4a48-b344-1c34ed34a872.mp4
