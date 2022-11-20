<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>locate</title>
  <link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<br>
<div class='container'>

  <div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span><strong>Account number : </strong> </div><br>
    <div class="panel-body">
      <div class='row'>
        <div class='col-sm-6'>

          <label for="owner_sowner_longhort">Owner:</label><br><br>
          <div class='well'>
            <div class="form-group">
              <label class="control-label" for="source">Location :</label>
              <select class="form-control">
                <optgroup label=''>
                  <option selected>House in 🌍204.61.212.0 → 204.61.218.255 🗓2015-11-13 12:34:23</option>
                  <option>client 🌍204.61.0.0 → 204.61.255.255 🗓2015-11-10 22:31:13</option>
                </optgroup>
                <optgroup label=''>
                  <option> ☑ Admin jtodd 🌍204.61.213.0 → 204.61.213.255 🗓2015-10-13 02:34:23</option>
                </optgroup>
                <optgroup label=''>
                  <option>Admin mohammed 🌍204.61.213.0 → 204.61.213.255 🗓2015-01-13 10:30:23</option>
                  <option>Whois ARIN 🌍204.61.212.0 → 204.61.218.255 🗓2015-05-10 12:34:23</option>
                </optgroup>
              </select>
            </div>
            <br>
            <fieldset class='subform'>
              <div class="form-group">
                <label class="control-label" for="owner_sowner_longhort">Type of Bulding:</label>
                <select class="form-control">

                    <option selected>Choose options</option>

                  </optgroup>

                    <option> ☑ Flat street Rentals</option>
                  </optgroup>

                    <option> ☑ Storey Buildings</option>

                  </optgroup>
                </select>
              </div>
              <br>

              <div class="form-group has-warning">
                <label class="control-label" for="owner_short">Floor:</label>
                <select class="form-control">

                    <option selected>Choose options</option>

                  </optgroup>

                    <option> ☑ Ground </option>
                  </optgroup>

                    <option> ☑ 1</option>

                  </optgroup>

                      <option >☑ 2</option>

                    </optgroup>

                      <option> ☑ 3</option>
                    </optgroup>

                      <option> ☑ 4</option>

                    </optgroup>

                                          <option >☑ 5</option>

                                        </optgroup>

                                          <option> ☑ 6</option>
                                        </optgroup>

                                          <option> ☑ 7</option>

                                        </optgroup>

                </select>
              </div>
              <br>
              <div class="checkbox">
                <label>
                  <input type="checkbox" > Vacancies
                </label><br><br>
                <label>
                  <input type="checkbox" > Agree to terms and conditions.
                </label>
              </div>
            </fieldset>
            <br>
            <div class='text-right'>
              <small>Last Updated: <strong>2015-11-13 12:34:23</strong></small>
              <button class='btn btn-primary'>Save Changes</button>
            </div>
          </div>
        </div>
        <br>
        <div class='col-sm-6'>
            <label class="control-label" for="source">Contact Details.:</label>
            <br>
          <div class='well'>
            <div class="form-group">
              <label for="source">Number of rooms:</label>
              <select class="form-control">
                <optgroup label='Thrid party'>
                  <option selected> ☑ 1 - 5</option>

                </optgroup>
                <optgroup label='Admin'>
                  <option >☑ 6 - 10</option>

                </optgroup>
                <optgroup label='History'>
                  <option>☑ 11 - 12</option>
                </optgroup>
              </select>
            </div>
            <fieldset class='subform'>
              <div class='row'>
                <div class='col-sm-4'>
                  <div class="form-group">
                    <label for="city">County:</label>
                    <input type="text" class="form-control" id="city" value=''>
                  </div>
                </div>
                <div class='col-sm-4'>
                  <div class="form-group">
                    <label for="province">Consitutency:</label>
                    <input type="text" class="form-control" id="province" value=''>
                  </div>
                </div>
                <div class='col-sm-4'>
                  <div class="form-group">
                    <label for="country">Ward:</label>
                    <input type="text" class="form-control" id="country" value=''>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-sm-6'>
                  <div class="form-group">
                    <label for="longitude">Closest Road:</label>
                    <input type="text" class="form-control" id="longitude" value=''>
                  </div>
                </div>
                <div class='col-sm-6'>
                  <div class="form-group">
                    <label for="latitude">Closest Goverment Insitute:</label>
                    <input type="text" class="form-control" id="latitude" value='' />
                  </div>
                </div>
              </div>
              <div class='well'>
                <div class="form-group">
                  <label for="source">Type of rooms:</label>
                  <select class="form-control">
                    <optgroup label='Thrid party'>
                      <option selected> ☑ 1 - 5</option>

                    </optgroup>
                    <optgroup label='Admin'>
                      <option >☑ 6 - 10</option>

                    </optgroup>
                    <optgroup label='History'>
                      <option>☑ 11 - 12</option>
                    </optgroup>
                  </select>
                </div>
                <div class='well'>
                  <div class="form-group">
                    <label for="source">Rent Fess</label>
                    <select class="form-control">
                      <optgroup label='Small sized rooms'>
                        <option selected> ☑ 3000 - 5000</option>

                      </optgroup>
                      <optgroup label='Medium sized rooms'>
                        <option >☑ 5100 - 7000</option>

                      </optgroup>
                      <optgroup label='Large sized rooms'>
                        <option>☑ 7100 - 10000</option>
                      </optgroup>
                      <optgroup label='Extra Large sized rooms'>
                        <option>☑ 11000 - 20000</option>
                      </optgroup>
                      <optgroup label='Very Large sized rooms'>
                        <option>☑ 21000 - 30000</option>
                      </optgroup>
                    </select>
                  </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div class='col-sm-12'>
        <label for="notes">Notes:</label>
        <textarea class="form-control" id="notes"></textarea>
      </div>
      <br>
      <br>
<hr>
      <hr>
  <button style="position:relative;right:-550px;" class='btn btn-primary'>Submit</button>
  <hr>
      <label class='inline_label'>Houses on rent:</label>
      <table class='table table-bordered table-striped'>
        <thead>
          <tr>
            <th></th>
            <th>Number</th>
            <th>Vacancy status</th>
            <th>Floor Number</th>
            <th>Owner Contact</th>
            <th>Building type.</th>
            <th>Location</th>
            <th>Room type</th>
            <th>Rent Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='center'>
              <input type="checkbox" />
            </td>
            <td>Marine Cable</td>
            <td>
              <span class='label label-danger'>Outage</span>
              <span class='label label-info'>New</span>
            </td>
            <td>46</td>
            <td>WoodyNet</td>
            <td>WoodyNet</td>
            <td>Berkeley, US</td>
            <td>255</td>
            <td>2015-12-01 15:34:23</td>

          </tr>

          <tr>
            <td class='center'>
              <input type="checkbox" />
            </td>
            <td>Comcast West</td>
            <td>
              <span class='label label-success'>Closed</span>
              <span class='label label-warning'>Unintentional</span>
            </td>
            <td>3856</td>
            <td>PCH</td>
            <td>Packet Clearing House</td>
            <td>San Jose, US</td>
            <td>20453</td>
            <td>2015-12-01 15:34:23</td>

          </tr>
        </tbody>
      </table>
      <img src="" width='16px' class='arrow_img' />
      <form class="form-inline">
        <button class='btn btn-primary' style="position:relative;right:-500px;">Edit</button>
      </form>

      <hr>
      <label class='inline_label'>Booking enquiries.:</label>
      <table class='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Username</th>
            <th>Action</th>
            <th>Contacts</th>
            <th>Value</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td nowrap>mohammed</td>
            <td nowrap><button class="btn btn-primary">Contact</button></td>
            <td nowrap>Owner</td>
            <td class='log_data'>{ip_start: '204.61.213.0', ip_end: '204.61.213.255', short_name: 'PCH', long_name:'Packet Clearing House', template:'rir-arin'}</td>
            <td nowrap>2015-12-01 15:34:23</td>
          </tr>
          <tr>
            <td nowrap>jtodd</td>
            <td nowrap><button class="btn btn-primary">Contact</button></td>
            <td nowrap>Location</td>
            <td class='log_data'>{ip_start: '204.61.213.0', ip_end: '204.61.213.255', city: 'Berkeley', province:'CA', template:'rir-arin'}</td>
            <td nowrap>2015-12-01 15:34:23</td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</div>
<!-- partial -->

</body>
</html>
