import { UserHead } from "components/UserHead";
import { SixthStepBody } from "modules/Partner/AddObject/components";
import { MyButton } from "components/Button";

export default function SixthStep() {
  return (
    <div className="wrapper bg-page-color-2 min-h-screen">
      <UserHead />
      <SixthStepBody />
      <div className="text-center my-8">
        <MyButton className="bg-green-color text-white font-medium p-3 px-20 rounded-full">
          Готово
        </MyButton>
      </div>
    </div>
  )
}
