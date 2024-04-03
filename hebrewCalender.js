//This line is importing the hebcal functions
import {HebrewCalendar, HDate, Location, Event, Zmanim,} from '@hebcal/core';
import { weekdayList } from './myFunctions.js';

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo('en-US')



//set the date to the previous sunday or today's sunday
 let day = new HDate().onOrBefore(0)
 let today = new HDate()


 //the array in which every day goes in
 let week= []

 

 //the loop which caculates the day by day zmanim
 for (let i = 0; i<7; i++){
    
   
 const zmanim = new Zmanim(Location.lookup("New York"), day )

let zman =
    {
        Weekday: weekdayList(i),
        Day: day.render('en'),
        Shma: zmanim.sofZmanShmaMGA().toLocaleTimeString(),
        Tefila: zmanim.sofZmanTfillaMGA().toLocaleTimeString()
    }
    if (day.dd == today.dd){

        zman.Shma=timeAgo.format(zmanim.sofZmanShmaMGA())
        zman.Tefila= timeAgo.format(zmanim.sofZmanTfillaMGA())
     }

     day = day.add(1)

    
    week.push(zman)
 
}  
  console.table(week)
