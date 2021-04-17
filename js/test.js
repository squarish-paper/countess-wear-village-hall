


function fetchActivities() {

    var activities = [
        {
            "day": "Wednesday",
            "time": "10 - 12noon",
            "name": "Ducklings",
            "summary": "Baby & Toddler Group",
            "description": "Ducklings is a friendly and informal playgroup for babies and toddlers up to school age, everyone is welcome so please feel free to drop in for a play, chat and a biscuit :)",
            "notes": "There's plenty of toys and play space for little ones to burn off some energy and it's lovely to be able to meet other parents and carers over tea or coffee as well.",
            "notesmore": "We meet on Wednesdays between 10 - 12 at the village hall in Countess Wear, it's pay as you go £1.50 per child and 50p for tea or coffee.",
            "contactname": "Jessica Startin",
            "contactnumber": "07540 995021",
            "contactemail": "countesswearvillagehall@gmail.com",
            "image": "ducklings.jpg"
        },
        {
            "day": "Thursday",
            "time": "10am - 12pm",
            "name": "Drama Tots",
            "summary": "Drama and Music Classes",
            "description": "Award-winning drama and music classes in East Devon and Exeter for children aged 18 months - 4 years. Fun, exciting and educational classes using props, puppets and instruments to bring adventures to life. ",
            "notes": "Booking essential.",
            "contactname": "Jennifer Clarke",
            "contactemail": "jeffi2807@googlemail.com",
            "image": "drama_tots_flyer.jpg"
        },
        {
            "day": "Thursday",
            "time": "6.30pm - 8.30pm",
            "name": "The Maternity Collective",
            "summary": "Antenatal and Hypnobirthing Classes",
            "description": "This class is your ultimate Birth Preparation Course, comprehensively covering everything you need to know to ensure you feel confident and empowered as you approach birth. As a team, we include an Obstetrician and Hypnobirthing Instructor, Community Midwife, International Board-Certified Lactation Consultant (IBCLC) and Newborn Behaviour Expert and a Paediatrician. We are all passionate about providing you with accurate, evidence-based information to enable you to make informed choices right for you and your baby.\nIncluded in the price of the course:\n- 14+ hours of group expert-led classes\n- Covid secure face-2-face sessions\n - Covers all aspects of pregnancy, labour, birth and the newborn period in depth\n - Complete Hypnobirthing course fully integrated\n - Newborn First Aid included as standard\n - Supports all methods of birth and feeding, including Elective Caesarean Section Course option.\n - Includes access to TMC Complete Online Antenatal Course – 7+ hours of videos to enable you to re-watch as needed or in case of a missed session (worth £39.50!)\n - Complete course notes booklet, including hypnobirthing scripts and relaxations\n - Exclusive discounts on pregnancy and baby products and resources\n - Opportunity to socialise as a group at The Tally Ho Pub and Restaurant right-next door before/after sessions. The Maternity Collective have arranged with The Tally Ho pub to reserve tables for parents and to take pre-orders of food during the session, should expectant parents wish to eat/drink together after a session.",
            "contactname": "Ellie Rayner",
            "contactemail": "thematernitycollective@outlook.com",
            "image": "maternity_collective_flyer.jpg"
        },
        {
            "day": "Sunday",
            "time": "9.30am - 10.30am",
            "name": "Private Hire",
            "summary": "Private Badminton Hire",
            "description": ""
        },
    ]




    activities.forEach(activity => {
        // console.log(activity);
        let summary = "<br />";
        if (activity.summary)
            summary = activity.summary;
        let actId = "act"+activity.name.replace(" ","")+"_"+activity.day.replace(" ","");
        let contactName = activity.contactname ? activity.contactname : "";
        let contactNumber = activity.contactnumber ? activity.contactnumber : "";
        let contactEmail = activity.contactemail ? activity.contactemail : "";
        let contactWebsite = activity.contactwebsite ? activity.contactwebsite : "";
        let notes = activity.notes ? activity.notes : "";
        let notesmore = activity.notesmore ? activity.notesmore : "";
        let image = activity.image ? activity.image : "";
        

        document.getElementById("activities-"+activity.day).innerHTML += 
       "<div class=\"w3-col l3 w3-center w3-padding-small\">"+
        "<div class=\"w3-card\">" +
          "<div class=\"w3-containter\">" +
            "<div class=\"w3-card\">" + 
              "<div class=\"w3-containter\">" + 
                "<div class=\"w3-text-bold\">"+activity.name+"</div>" + 
                "<div class=\"w3-small\">"+summary+"</div>" +
                "<div class=\"w3-row\">" +
                   "<div class=\"w3-threequarter\">"+activity.time+"</div>" +
                   "<div class=\"w3-quarter w3-hover w3-round-xlarge w3-light-blue\" style=\"cursor:pointer\" onclick=\"onClick('"+actId+"');ga('send', 'event', 'Activity', 'Click', '"+activity.name+"');\" ><i class=\"fa fa-info\"></i></div>" +
                "</div>" +
                "</div>" +
              "</div>" +
            "</div>" +
           "</div>" +
           "<div id=\""+actId+"Header\" class=\"w3-hide\">"+activity.name+"</div>" +
           "<div id=\""+actId+"SubHeader\" class=\"w3-hide\">"+activity.summary+"</div>" +
           "<div id=\""+actId+"Long\" class=\"w3-hide\">"+activity.description.replace("\n","<br />")+"</div>" +
           "<div id=\""+actId+"Notes\" class=\"w3-hide\">"+notes+"</div>" +
           "<div id=\""+actId+"NotesMore\" class=\"w3-hide\">"+notesmore+"</div>" +
           "<div id=\""+actId+"ContactName\" class=\"w3-hide\">"+contactName+"</div>" +
           "<div id=\""+actId+"ContactNumber\" class=\"w3-hide\">"+contactNumber+"</div>" +
           "<div id=\""+actId+"ContactEmail\" class=\"w3-hide\">"+contactEmail+"</div>" +
           "<div id=\""+actId+"ContactWebsite\" class=\"w3-hide\">"+contactWebsite+"</div>" +
           "<div id=\""+actId+"Time\" class=\"w3-hide\">"+activity.time+"</div>" +
           "<div id=\""+actId+"Day\" class=\"w3-hide\">"+activity.day+"</div>" +
           "<div id=\""+actId+"Image\" class=\"w3-hide\">"+image+"</div>" +
        "</div>";
    });


}