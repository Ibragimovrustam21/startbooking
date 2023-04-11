import { MyInput } from "components/Input"
import { MySelect } from "components/Select"

export const AboutPerson = () => {
  return (
    <>
      <div className="bg-white rounded-xl mb-3 max-h-[70%] p-4">
        <p className="py-2 text-font-color text-2xl">
          Настроить личные данные
        </p>
        <div className="flex items-center flex-wrap mt-4">
          <div className="w-[45%] mb-2 mr-4">
            <p className="mb-1 text-slate-500">
              Ваше имя
            </p>
            <MyInput type="text" placeholder="Имя" myClass="py-2 border w-full" />
          </div>
          <div className="w-[45%] mb-2">
            <p className="mb-1 text-slate-500">
              Пол
            </p>
            <MySelect placeholder="Пол" classNamePrefix="base-select" />
          </div>
          <div className="w-[45%] mb-2 mr-4">
            <p className="mb-1 text-slate-500">
              Фамилия
            </p>
            <MyInput type="text" placeholder="Фамилия" myClass="py-2 border w-full" />
          </div>
          <div className="w-[45%] mb-2">
            <p className="mb-1 text-slate-500">
              Дата рождения (дд.мм.гг.)
            </p>
            <MySelect placeholder="21.10.2000" classNamePrefix="base-select" />
          </div>
          <div className="w-[45%] mb-2 mr-4">
            <p className="mb-1 text-slate-500">
              Отчество
            </p>
            <MyInput type="text" placeholder="Отчество" myClass="py-2 border w-full" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl min-h-[30%] p-4">
        <p className="py-2 text-font-color text-2xl">
          Локация
        </p>
        <div className="flex items-center flex-wrap mt-4">
          <div className="w-[45%] mb-2 mr-2">
            <p className="mb-1 text-slate-500">
              Страна
            </p>
            <MySelect placeholder="Узбекистан" classNamePrefix="base-select" />
          </div>
          <div className="w-[45%] mb-2">
            <p className="mb-1 text-slate-500">
              Город
            </p>
            <MySelect placeholder="Ташкент" classNamePrefix="base-select" />
          </div>
        </div>
      </div>
    </>
  )
}
