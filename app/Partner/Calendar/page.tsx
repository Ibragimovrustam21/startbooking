import { UserHead } from "components/UserHead";
import { CalendarFilterBox, VisitCardRoom } from "modules/Partner/Calendar/components";
import { InfoAboutRoom } from "modules/Partner/Calendar/components";

export default function Calendar() {
  return (
    <div className="wrapper bg-page-color-2">
      <UserHead />
      <CalendarFilterBox />
      <div className="flex items-center my-4">
        <p className="mr-10 flex items-center">
          <span className="h-3 w-3 block bg-blue-color mr-2"></span>
          Проживание в объектах
        </p>
        <p className="mr-10 flex items-center">
          <span className="h-3 w-3 block bg-green-color mr-2"></span>
          Объекты предварительно забронированы
        </p>
        <p className="flex items-center">
          <span className="h-3 w-3 block bg-red-400 mr-2"></span>
          Занято хозяином
        </p>
      </div>
      {/* map cycle*/}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <VisitCardRoom />
        </div>
        <div className="col-span-2">
          <InfoAboutRoom />
        </div>
      </div>

    </div>
  )
}
