import Layout from '../comps/FormLayout'
import QuestionLayout from '../comps/QuestionLayout'
import InputLayout from '../comps/InputLayout'

export default function Name() {
  return (
	<Layout>
	    <form>
		  <QuestionLayout>
		  	<h>What is your name?</h>
		  </QuestionLayout>
		  <InputLayout />
		</form>
		<style jsx>{`
        .submit:{display:block }
      `}</style>
	</Layout>
  );
 return (
 	<Layout />
 );
}