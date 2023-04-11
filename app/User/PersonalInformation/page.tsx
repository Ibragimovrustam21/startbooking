'use client'
import { UserHead } from "components/UserHead";
import { ProfileCard } from "modules/User/Profile/components";
import { AboutPerson } from "modules/User/PersonalInformation/components";

export default function PersonalInformation() {
  return (
    <div className="wrapper bg-page-color-2 min-h-[110vh]">
      <UserHead />
      <div className="grid grid-cols-9 gap-7 mt-7">
        <div className="col-span-3">
          <ProfileCard />
        </div>
        <div className="col-span-4">
          <AboutPerson />
        </div>
      </div>
    </div>
  )
}
