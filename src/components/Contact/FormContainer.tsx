import PhoneSvg from "./PhoneSvg"
import Form from "./Form"

const FormContainer = ({ isInView }: { isInView: boolean }) => {
  return (
    <div className="relative flex w-full max-w-8xl flex-1 justify-center px-4">
      <PhoneSvg isInView={isInView} />
      <Form />
    </div>
  )
}
export default FormContainer
