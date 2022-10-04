function Footer () {
   return(
   

<div class="container mt-3">
  <h2>Our Social Media Pages</h2>
 
  <form action="/action_page.php">
    <label for="sel1" class="form-label">Select list (select one):</label>
    <select class="form-select" id="sel1" name="sellist1">
      <option>facebook</option>
      <option>instagram</option>
      <option>linkedin</option>
      <option>twitter</option>
    </select>
    
    

  </form>
</div>

   )
}


 export default Footer;