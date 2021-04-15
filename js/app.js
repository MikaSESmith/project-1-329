

////////////////////////////////////////////////////////////////
//GET DATA FROM GOOGLE SHEETS
///////////////////////////////////////////////////////////////


$.ajax("https://spreadsheets.google.com/feeds/list/12FAlzTbGAuA1Z9lRfnXmF-5D5awVJTKokUCIw44OEFE/1/public/full?alt=json")

//.then for when the data arririves
.then((data) => {
    console.log(data)

    // map over the data, generate a simpler dataset
    const projects = data.feed.entry.map((item) => {    
        return{
         
            giturl: item.gsx$giturl.$t,
            gitimage: item.gsx$image.$t,
            gitliveurl: item.gsx$liveurl.$t,
            gitproject: item.gsx$project.$t,
            gitdescription: item.gsx$description.$t
        }  
    
    })
    console.log(projects)


/////////////////////////////////////
///jQuery to render your project below
////////////////////////////////////


})
//.catch in case of error
.catch((error) => {
    console.error(error)
})

