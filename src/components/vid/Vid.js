import React from 'react'
import { Typography, AppBar } from '@material-ui/core'

import VideoPlayer from './VideoPlayer'
import Options from './Options'
import Notifications from './Notifications'

export default function Vid () {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Vid Chat</Typography>
      </AppBar>
      {/* Video Player Component */}
      <VideoPlayer/>
      {/* Options -> notifications component */}
      <Options>
        <Notifications/>
      </Options>
    </div>
  )
}
