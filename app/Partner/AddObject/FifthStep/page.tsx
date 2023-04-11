import Link from 'next/link'
import { UserHead } from 'components/UserHead'
import { MyButton } from 'components/Button'
import { FifthStepBody } from 'modules/Partner/AddObject/components'

export default function FifthStep() {
  return (
    <div className="wrapper bg-page-color-2 min-h-screen">
      <UserHead />
      <FifthStepBody />
      <div className="text-center my-8">
        <Link href='/partner/add-object/sixth-step'>
          <MyButton className="bg-green-color text-white font-medium p-3 px-20 rounded-full">
            Дальше
          </MyButton>
        </Link>
      </div>
    </div>
  )
}
