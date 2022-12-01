import {BsFillSafe2Fill} from "react-icons/bs";
import {BsFillTrophyFill} from "react-icons/bs";
import {BsBarChartLineFill} from "react-icons/bs";
import {BsCalendarCheckFill} from "react-icons/bs";
import person from "../assets/image/1.jpg";
import river from "../assets/image/2.jpg";
import airplane from "../assets/image/3.jpg";
import { FirstBtn } from "../styles/styled-components/components";
const title1 = "لورم ایپسوم متن ساختگی";
const text1 = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.";
const text2 = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";

export const introduction = [
    {id: 1 , icon: BsFillSafe2Fill ,  title: title1 , text: text1},
    {id: 2 , icon: BsFillTrophyFill ,  title: title1 , text: text1},
    {id: 3 , icon: BsBarChartLineFill ,  title: title1 , text: text1},
    {id: 4 , icon: BsCalendarCheckFill ,  title: title1 , text: text1},
]

export const cards = [
    {id: 1 , img: person , title: title1 , text: text2 , btn: FirstBtn},
    {id: 2 , img: river , title: title1 , text: text2 , btn: FirstBtn},
    {id: 3 , img: airplane , title: title1 , text: text2 , btn: FirstBtn},
]