import { UserHead } from "components/UserHead";
import { FourthStepBody } from "modules/Partner/AddObject/components";
import Link from "next/link";
import { MyButton } from "components/Button";

export default function FourthStep() {
  return (
    <div className="wrapper bg-page-color-2 min-h-screen">
      <UserHead />
      <FourthStepBody />
      <div className="text-center my-8">
        <Link href='/partner/add-object/fifth-step'>
          <MyButton className="bg-green-color text-white font-medium p-3 px-20 rounded-full">
            Дальше
          </MyButton>
        </Link>
      </div>
    </div>
  )
}
