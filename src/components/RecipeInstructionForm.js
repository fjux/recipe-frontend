import React from "react";
import { useState } from "react";
const RecipeInstructionForm = (props) => {
  const [instruction, setInstruction] = useState("");

  return (
  <div>
    <h2>Recipe instruction</h2>
    <div class="contact-form-container">
      <div class="contact-form">
        <form action="submission.html" method="POST">
          <div class="form-control">
            <label htmlFor="recipe">Write instructions for your recipe:</label>
            <textarea  id="message" name="message" cols="60" rows="10" placeholder="Enter your instructions" class="input-field" required>
            </textarea>
          </div>
          <input type="submit" value="Submit" id="submit-btn" class="submit-btn" onclick="asserts">
          <input type="reset" value="Reset" id="reset-btn" class="reset-btn"> 
        </form>
      </div>
    </div>
  </div>
  
  );

};
export default RecipeInstructionForm;