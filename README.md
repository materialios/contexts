# @materialios/contexts
ReactJs contexts for @materialios

## Features
* ResponsiveContext, { ResponsiveContextProvider }
* DrawerContext, { DrawerContextProvider }

## Installation
```
npm i @materialios/contexts
```

## Example
```c
import { useContext } from 'react'
import { ResponsiveContext, ResponsiveContextProvider } from '@materialios/contexts'

const Home = () => {
  const { orientation, device, size } = useContext(ResponsiveContext)

  return (
    <div className='Home'>
      <p>orientation: {orientation}</p>
      <p>device: {device}</p>
      <p>size: {size}</p>
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      <ResponsiveContextProvider>
        <Home />
      </ResponsiveContextProvider>
    </div>
  )
}

export default App
```

## Contributing
It's really still early days. So, help us to grow faster. Email me on [muhammadnurrendra@gmail.com](mailto:muhammadnurrendra@gmail.com)

## Creator
[@mnrendra](https://github.com/mnrendra)
