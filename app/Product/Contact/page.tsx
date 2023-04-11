import Image from "next/image";
import Link from "next/link";
import Map from 'assets/map.png'
import MapImage1 from 'assets/besideMap1.png'
import MapImage2 from 'assets/besideMap2.png'


export default function Contact() {
  return (
    <div className="wrapper bg-page-color-2">
      <p className="font-medium text-3xl text-black-700 mb-10">
        Контакты
      </p>
      <div className="flex">
        <div className="mr-16">
          <p className="py-2 text-gray-color text-sm">
            Номер телефона
          </p>
          <p className="text-font-color font-medium text-xl">
            +998 90 799-85-55
          </p>
        </div>
        <div className="mr-16">
          <p className="py-2 text-gray-color text-sm">
            Электронная почта
          </p>
          <p className="text-font-color font-medium text-xl">
            info@start-booking.uz
          </p>
        </div>
        <div className="mr-16">
          <p className="py-2 text-gray-color text-sm mb-1">
            Социальные сети
          </p>
          <div className="flex items-center">
            <Link href='' className="mr-6">
              <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87859 14.9431H1.9114V7.77242H0.428711V5.30163H1.9114V3.81826C1.9114 1.80271 2.74816 0.603516 5.12699 0.603516H7.10694V3.07521H5.86947C4.94342 3.07521 4.88222 3.42049 4.88222 4.06488L4.87814 5.30163H7.12053L6.85808 7.77242H4.87814V14.9431H4.87859Z" fill="#333333" />
              </svg>
            </Link>
            <Link href='' className="mr-6">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.19974 8.25132C5.19974 6.84345 6.34078 5.70184 7.74869 5.70184C9.15661 5.70184 10.2983 6.84345 10.2983 8.25132C10.2983 9.65918 9.15661 10.8008 7.74869 10.8008C6.34078 10.8008 5.19974 9.65918 5.19974 8.25132ZM3.82147 8.25132C3.82147 10.4203 5.57967 12.1784 7.74869 12.1784C9.91772 12.1784 11.6759 10.4203 11.6759 8.25132C11.6759 6.08238 9.91772 4.32425 7.74869 4.32425C5.57967 4.32425 3.82147 6.08238 3.82147 8.25132ZM10.9136 4.16858C10.9136 4.67513 11.3244 5.08656 11.8316 5.08656C12.3382 5.08656 12.7496 4.67513 12.7496 4.16858C12.7496 3.66202 12.3388 3.25121 11.8316 3.25121C11.3244 3.25121 10.9136 3.66202 10.9136 4.16858ZM4.65856 14.4764C3.9129 14.4424 3.50764 14.3183 3.23829 14.2133C2.88121 14.0743 2.62669 13.9087 2.35857 13.6412C2.09107 13.3737 1.92489 13.1192 1.78651 12.7622C1.68148 12.4928 1.55731 12.0876 1.52333 11.3419C1.48627 10.5358 1.47885 10.2936 1.47885 8.25132C1.47885 6.20902 1.48688 5.96748 1.52333 5.16069C1.55731 4.41506 1.6821 4.01043 1.78651 3.74047C1.92551 3.38341 2.09107 3.1289 2.35857 2.86079C2.62607 2.5933 2.88059 2.42713 3.23829 2.28875C3.50764 2.18373 3.9129 2.05956 4.65856 2.02559C5.46476 1.98852 5.70693 1.98111 7.74869 1.98111C9.79107 1.98111 10.0326 1.98914 10.8394 2.02559C11.5851 2.05956 11.9898 2.18435 12.2597 2.28875C12.6168 2.42713 12.8713 2.5933 13.1394 2.86079C13.4069 3.12828 13.5725 3.38341 13.7115 3.74047C13.8165 4.00981 13.9407 4.41506 13.9747 5.16069C14.0117 5.96748 14.0192 6.20902 14.0192 8.25132C14.0192 10.293 14.0117 10.5352 13.9747 11.3419C13.9407 12.0876 13.8159 12.4928 13.7115 12.7622C13.5725 13.1192 13.4069 13.3737 13.1394 13.6412C12.8719 13.9087 12.6168 14.0743 12.2597 14.2133C11.9904 14.3183 11.5851 14.4424 10.8394 14.4764C10.0332 14.5135 9.79107 14.5209 7.74869 14.5209C5.70693 14.5209 5.46476 14.5135 4.65856 14.4764ZM4.59555 0.649847C3.78132 0.686912 3.22531 0.816023 2.73912 1.00506C2.23625 1.20027 1.80998 1.46219 1.38433 1.88721C0.959299 2.31222 0.697361 2.73847 0.502143 3.24194C0.313102 3.72812 0.183986 4.2841 0.146919 5.0983C0.109235 5.91373 0.100586 6.17442 0.100586 8.25132C0.100586 10.3282 0.109235 10.5889 0.146919 11.4043C0.183986 12.2185 0.313102 12.7745 0.502143 13.2607C0.697361 13.7635 0.958681 14.1904 1.38433 14.6154C1.80936 15.0404 2.23563 15.3017 2.73912 15.4976C3.22593 15.6866 3.78132 15.8157 4.59555 15.8528C5.41164 15.8898 5.67172 15.8991 7.74869 15.8991C9.82629 15.8991 10.0864 15.8905 10.9018 15.8528C11.7161 15.8157 12.2721 15.6866 12.7583 15.4976C13.2611 15.3017 13.6874 15.0404 14.1131 14.6154C14.5381 14.1904 14.7994 13.7635 14.9952 13.2607C15.1843 12.7745 15.314 12.2185 15.3505 11.4043C15.3875 10.5883 15.3962 10.3282 15.3962 8.25132C15.3962 6.17442 15.3875 5.91373 15.3505 5.0983C15.3134 4.2841 15.1843 3.72812 14.9952 3.24194C14.7994 2.73909 14.5381 2.31284 14.1131 1.88721C13.688 1.46219 13.2611 1.20027 12.7589 1.00506C12.2721 0.816023 11.7161 0.686295 10.9025 0.649847C10.087 0.612782 9.82629 0.603516 7.74931 0.603516C5.67172 0.603516 5.41164 0.612164 4.59555 0.649847Z" fill="#333333" />
              </svg>

            </Link>
            <Link href='' className="mr-6">
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4867 0.0263765L0.238423 6.35646C-0.0706939 6.47689 -0.081921 6.90687 0.220466 7.04302L3.81249 8.66046C3.90978 8.70432 3.98366 8.78712 4.01568 8.88826L5.5568 13.7549C5.63465 14.0005 5.93406 14.0959 6.14135 13.9409L8.82384 11.9355C8.95194 11.8397 9.12715 11.8352 9.2601 11.9242L13.759 14.9359C13.9835 15.0861 14.2895 14.9587 14.3387 14.6946L16.9935 0.441175C17.0471 0.153491 16.7611 -0.0805299 16.4867 0.0263765ZM6.64065 9.35072L6.15594 12.0849L4.90471 8.17004L13.483 2.88681L6.64065 9.35072Z" fill="#333333" />
              </svg>
            </Link>
            <Link href='' className="mr-6">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.11668 0C3.32105 0 0.233352 3.0877 0.233352 6.88333C0.233352 8.08407 0.547419 9.2638 1.14242 10.3017L0.0119194 13.6929C-0.0151472 13.7741 0.0046861 13.8637 0.0632527 13.9263C0.107819 13.9741 0.169886 14 0.233352 14C0.253186 14 0.273019 13.9974 0.292619 13.9923L3.99515 13.0181C4.95671 13.5081 6.03401 13.7667 7.11668 13.7667C10.9123 13.7667 14 10.679 14 6.88333C14 3.0877 10.9123 0 7.11668 0ZM11.4119 10.0086L11.0017 10.419C10.4837 10.9373 9.90571 11.2 9.28434 11.2C9.28411 11.2 9.28434 11.2 9.28411 11.2C8.44644 11.2 7.54321 10.7217 6.60008 9.7783L4.22171 7.39993C3.47761 6.65607 3.02052 5.93343 2.86302 5.25187C2.67168 4.42423 2.91318 3.66613 3.58098 2.99857L3.99118 2.58813C4.25508 2.32423 4.68208 2.25937 5.01271 2.43437C5.63384 2.76313 6.27738 3.8402 6.34878 3.96177C6.47758 4.1874 6.51701 4.42073 6.46148 4.62093C6.41901 4.77377 6.32334 4.89837 6.18404 4.98283C5.99574 5.14057 5.77454 5.33703 5.73581 5.3872C5.49875 5.73697 5.52581 6.00553 5.83124 6.3112L7.68904 8.169C7.99704 8.47723 8.26071 8.50243 8.61607 8.26187C8.66297 8.22523 8.85944 8.00427 9.01717 7.81573C9.13501 7.6209 9.32797 7.51427 9.56271 7.51427C9.71647 7.51427 9.88004 7.56093 10.0357 7.6496C10.1598 7.72263 11.2371 8.3664 11.5656 8.9873C11.7453 9.3268 11.6837 9.737 11.4119 10.0086Z" fill="#333333" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mr-16">
          <p className="py-2 text-gray-color text-sm">
            Адресс
          </p>
          <p className="text-font-color font-medium text-xl">
            ул. Авиаконструктора Микояна д. 4, 125167
          </p>
        </div>
      </div>
      <div className="w-1/2 h-[28rem] relative border mt-10 rounded-md">
        <Image
          src={Map}
          className='h-full w-full'
          alt=''
        />
        <Image
          src={MapImage1}
          className='absolute bottom-0 -right-28'
          alt=''
        />
        <Image
          src={MapImage2}
          className='absolute bottom-0 right-0'
          alt=''
        />

      </div>
    </div>
  )
}
