import { UserHead } from 'components/UserHead'
import { Message, Support } from 'modules/User/Notification/components'
import { ProfileCard } from 'modules/User/Profile/components'

export default function Notification() {
  return (
    <div className="wrapper bg-page-color-2 min-h-screen">
      <UserHead />
      <div className="grid grid-cols-9 gap-5 mt-7">
        <div className="col-span-3">
          <ProfileCard />
        </div>
        <div className="col-span-3 bg-white rounded-xl p-5">
          <Message />
        </div>
        <div className="col-span-3 bg-white rounded-xl p-5">
          <Support />
        </div>
      </div>
    </div>
  )
}
