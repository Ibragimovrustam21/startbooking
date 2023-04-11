import { UserHead } from "components/UserHead";
import { ProfileCard } from "modules/User/Profile/components";

export default function Profile() {
  return (
    <div className="wrapper bg-page-color-2">
      <UserHead />

      <div className="flex items-center justify-center">
        <ProfileCard />
      </div>
    </div>
  )
}
