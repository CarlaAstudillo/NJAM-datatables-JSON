
var jqueryNoConflict = jQuery;



// begin main function
jqueryNoConflict(document).ready(function(){

    var pymChild = new pym.Child(); 




    // Change google spreadsheet link here

    // initializeTabletopObject('https://docs.google.com/spreadsheets/d/1vSA6ki0BZp_54OxsEq26mn4pDjoE8bwaEOdqFhMwqv4/pubhtml');


    $.ajax({
  url: "data/school_aid.json",
}).done(function(data) {

    writeTableWith(data)
 
});

});



var width = $('body').width()



// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,
        simpleSheet: true,
        debug: false
    });
}

// create table headers
function createTableColumns(){



    /* swap out the properties of mDataProp & sTitle to reflect
    the names of columns or keys you want to display.
    Remember, tabletop.js strips out spaces from column titles, which
    is what happens with the More Info column header */

    //For Google Sheets

            // {'mDataProp': 'county', 'sTitle': 'County', 'sClass': 'left'},
        // {'mDataProp': 'district', 'sTitle': 'District', 'sClass': 'left'},
        // {'mDataProp': 'aid1920', 'sTitle': '2019-20 Aid', 'sClass': 'left'},
        // {'mDataProp': 'aidchange', 'sTitle': 'Dollar Increase', 'sClass': 'left'},
        // {'mDataProp': 'aidchangeperc', 'sTitle': 'Percent Increase', 'sClass': 'left'}



    var tableColumns =   [
    {'mDataProp': 'County', 'sTitle': 'County', 'sClass': 'left'},
     {'mDataProp': 'District', 'sTitle': 'District', 'sClass': 'left'},
   {'mDataProp': 'aid_19_20', 'sTitle': '2019-20 Aid', 'sClass': 'left'},
      {'mDataProp': 'aid_change', 'sTitle': 'Dollar Increase', 'sClass': 'left'},
     {'mDataProp': 'aid_change_perc', 'sTitle': 'Percent Increase', 'sClass': 'left'}

    ];
    return tableColumns;

}

// {'mDataProp': 'oneyearchange', 'sTitle': 'One Year Aid Change', 'sClass': 'left'},


// create the table container and object
function writeTableWith(dataSource){


    jqueryNoConflict('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-hover" id="data-table-container"></table>');

    var oTable = jqueryNoConflict('#data-table-container').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': displaylength(width),
        'aaSorting': [[ 4, 'desc' ]],
        "deferRender": true,
        'aaData': dataSource, 
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ <br>records per page'
        }
    });
var pymChild = new pym.Child(); 

};


function displaylength(bodywidth) {
    if (bodywidth > 450)
    {
        return 25
    }
    else {
        return 10
    }
}



//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort['string-case-asc']  = function(x,y) {
    return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
    return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};

