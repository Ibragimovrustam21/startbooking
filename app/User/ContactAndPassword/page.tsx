import { UserHead } from "components/UserHead";
import { Contact, Password } from "modules/User/ContactAndPassword/components";
import { ProfileCard } from "modules/User/Profile/components";

export default function ContactAndPassword() {
  return (
    <div className="wrapper bg-page-color-2 min-h-screen">
      <UserHead />
      <div className="grid grid-cols-9 gap-5 mt-7">
        <div className="col-span-3">
          <ProfileCard />
        </div>
        <div className="col-span-3 ">
          <Contact />
        </div>
        <div className="col-span-3">
          <Password />
        </div>
      </div>
    </div>
  )
}
