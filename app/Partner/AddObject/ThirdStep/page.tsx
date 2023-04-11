import { UserHead } from "components/UserHead";
import { ThirdStepBody } from "modules/Partner/AddObject/components";
import Link from "next/link";
import { MyButton } from "components/Button";

export default function ThirdStep() {
  return (
    <div className="wrapper bg-page-color-2 min-h-screen">
      <UserHead />
      <ThirdStepBody />
      <div className="text-center my-8">
        <Link href='/partner/add-object/four-step'>
          <MyButton className="bg-green-color text-white font-medium p-3 px-20 rounded-full">
            Дальше
          </MyButton>
        </Link>
      </div>
    </div>
  )
}
