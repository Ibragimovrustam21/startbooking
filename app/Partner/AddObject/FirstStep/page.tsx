import Link from "next/link";
import { UserHead } from "components/UserHead";
import { FirstStepBody } from "modules/Partner/AddObject/components";
import { MyButton } from "components/Button";

export default function FirstStep() {
  return (
    <div className="wrapper bg-page-color-2 min-h-screen">
      <UserHead />
      <FirstStepBody />
      <div className="text-center my-8">
        <Link href='/partner/add-object/second-step'>
          <MyButton className="bg-green-color text-white font-medium p-3 px-20 rounded-full">
            Дальше
          </MyButton>
        </Link>
      </div>
    </div>
  )
}
