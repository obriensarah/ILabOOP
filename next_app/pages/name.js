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

if(typeof window !== 'undefined') { 
	document.getElementById("esc").addEventListener("click", function(){ 
	   window.close()
       // window.location.replace('google.com');
   })
   }