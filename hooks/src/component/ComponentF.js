import React from 'react' 
import { ChannelContext, UserContext } from '../App'


function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
            User => {
                return (
                    <ChannelContext.Consumer>
                        {channel => {
                            return (
                                <div>User context value {User}, channel context value {channel}</div>
                            )
                        }}
                    </ChannelContext.Consumer>
                )
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
