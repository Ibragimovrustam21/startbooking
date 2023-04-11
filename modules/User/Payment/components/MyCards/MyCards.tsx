import { PlasticCard } from 'modules/Product/Payment/components/PlasticCard/PlasticCard'

export const MyCards = () => {
  return (
    <>
      <p className='font-semibold text-font-color text-2xl mb-10'>
        Мои карты:
      </p>
      <div className="flex mt-5">
        {
          [1, 2].map((item, idx) => {
            return <PlasticCard key={idx} />
          })
        }
      </div>
    </>
  )
}
