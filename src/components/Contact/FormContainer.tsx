import PhoneSvg from "./PhoneSvg"
import Form from "./Form"

const FormContainer = ({ isInView }: { isInView: boolean }) => {
  return (
    <div className="relative flex-1">
      <PhoneSvg isInView={isInView} />
      <Form />
    </div>
  )
}
export default FormContainer
