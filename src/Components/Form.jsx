import React,{useState} from "react";
import { submitForm } from '../services/apiService';

const Form = () => {
    const [formData, setFormData] = useState({
        team_name: '',
        Leader_name: '',
        Leader_branch: '',
        floating_email: '',
        floating_number: '',
        is_girl_member: false,
        is_interbranch: false,
        number_of_members: '',
        member1_name: '',
        member1_branch_and_reg: '',
        member1_email: '',
        member1_whatsapp_no: '',
        member2_name: '',
        member2_branch_and_reg: '',
        member2_email: '',
        member2_whatsapp_no: '',
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
      const [formSubmitted, setFormSubmitted] = useState(false);


    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await submitForm(formData); 
          console.log(response);
          
          setFormSubmitted(true);
        } catch (error) {
          
          console.error('Form submission error:', error);
        }
      };
  return (
    <div className="">
         {formSubmitted ? (
      <div className="text-green-500">Form submitted successfully!</div>
    ) : (
      <form className=" p-[15%] justify-center items-center" onSubmit={handleSubmit}>
        <div class=" relative z-0  mb-6 group">
          <input
            type="text"
            name="team_name"
            id="team_name"
            value={formData.team_name}
            onChange={handleChange}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="team_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Team Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="Leader_name"
            id="Leader_name"
            value={formData.Leader_name}
            onChange={handleChange}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="Leader_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Leader Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="Leader_branch"
            id="Leader_branch"
            value={formData.Leader_branch}
            onChange={handleChange}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="Leader_branch"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Leader Branch
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            value={formData.floating_email}
            onChange={handleChange}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Team Leader email
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="floating_number"
            id="floating_number"
            value={formData.floating_number}
            onChange={handleChange}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_number"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Team Leader WhatsApp No.
          </label>
        </div>
        <div className="flex flex-row justify-between">
          <div class="flex items-center mb-4 ">
            <input
              id="default-checkbox"
              type="checkbox"
              checked={formData.is_girl_member} 
              onChange={handleChange}
              
              class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Is Girl member in team?
            </label>
          </div>
          <div class="flex items-center mb-4">
            <input
              
              id="checked-checkbox"
              type="checkbox"
              checked={formData.is_interbarnch} 
              onChange={handleChange}
              class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Is team Interbranch?
            </label>
          </div>
          <div class="relative z-0 mb-6 group">
  <select
    id="dropdown"
    value={formData.number_of_members} 
    onChange={handleChange}
    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    required
  >
    <option value="" disabled selected>No of Member in Team </option>
    <option value="option1">2</option>
    <option value="option2">3</option>
  
  </select>
  
</div>


          
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
  <div class="relative z-0 w-full mb-6 group">
    <input
      type="text"
      name="member1_name" // Change the name to match the field
      id="member1_name"
      value={formData.member1_name}
      onChange={handleChange}
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      for="member1_name"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Member 1 Name
    </label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
    <input
      type="text"
      name="member1_branch_and_reg" // Change the name to match the field
      id="member1_branch_and_reg"
      value={formData.member1_branch_and_reg}
      onChange={handleChange}
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      for="member1_branch_and_reg"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Member 1 Branch and Reg Number
    </label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
    <input
      type="email"
      name="member1_email" // Change the name to match the field
      id="member1_email"
      value={formData.member1_email}
      onChange={handleChange}
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      for="member1_email"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Member 1 Email
    </label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
    <input
      type="number"
      name="member1_whatsapp_no" // Change the name to match the field
      id="member1_whatsapp_no"
      value={formData.member1_whatsapp_no}
      onChange={handleChange}
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      for="member1_whatsapp_no"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Member 1 WhatsApp No.
    </label>
  </div>
</div>

<div class="grid md:grid-cols-2 md:gap-6">
  <div class="relative z-0 w-full mb-6 group">
    <input
      type="text"
      name="member2_name" // Change the name to match the field
      id="member2_name"
      value={formData.member2_name}
      onChange={handleChange}
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
   
    />
    <label
      for="member2_name"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Member 2 Name
    </label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
    <input
      type="text"
      name="member2_branch_and_reg" // Change the name to match the field
      id="member2_branch_and_reg"
      value={formData.member2_branch_and_reg}
      onChange={handleChange}
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      
    />
    <label
      for="member2_branch_and_reg"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Member 2 Branch and Reg Number
    </label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
    <input
      type="email"
      name="member2_email" // Change the name to match the field
      id="member2_email"
      value={formData.member2_email}
      onChange={handleChange}
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
   
    />
    <label
      for="member2_email"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Member 2 Email
    </label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
    <input
      type="number"
      name="member2_whatsapp_no" // Change the name to match the field
      id="member2_whatsapp_no"
      value={formData.member2_whatsapp_no}
      onChange={handleChange}
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
   
    />
    <label
      for="member2_whatsapp_no"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Member 2 WhatsApp No.
    </label>
  </div>
</div>

        
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
       )}
    </div>
  );
};

export default Form;
