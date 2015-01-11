
<div  class="scrollable">  

  <div class="scrollable-content">
    <div id="content">

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <form > 
            <textarea rows="3" id ="update" class="form-control" placeholder="Enter any updates ..."></textarea>
            <br>
            <button type="submit" class="btn btn-primary">Update</button></div>
        </form>
    <div class="col-md-2"></div>
</div>
<div class="col-md-2"></div>
</div>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-7">
        <form>
              <div ng-repeat="row in event_categories" >
                  <h2>{{row}}</h2>
                  <div ng-repeat="x in event[row]" >
                  <input type="checkbox" > {{x}}
                  <br>
                  </div>
              </div>
              <br> <button type="submit" class="btn btn-primary">Update</button></div>

        </form>
    </div>
    <div class="col-md-2"></div>
  </div>
</div></div></div>
