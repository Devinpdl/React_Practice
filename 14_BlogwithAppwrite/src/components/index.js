//We do created index.js inside component folder to export all the components from here one-by-one..
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

//Let's import Select functionality;
import Select from "../components/Select"

//Let's import Container and export it as object
import Container from '../container/Container';

//Let's import Logo too
import Logo from './Logo'

//Let's import Logout Button too;
import LogoutBtn from "./Header/LogoutBtn";

//Let's import RTE.jsx
import RTE from "./RTE";

//Let's import Signup
import Signup from "./Signup";

//Let's importt Login to import in pages folder;
import Login from "./Login";

import PostForm from "../components/post_form/PostForm"

import PostCard from '../components/PostCard'

import Button from '../components/Button'

import Input from "../components/Input"

import AuthLayout from '../components/AuthLayout'

import Eye from "./Icons/Eye";
import EyeSlash from "./Icons/EyeSlash";

//And we do export it by enclosing as Objects..

export {
    Header,
    Footer,
    Container,
    Logo,
    LogoutBtn,
    RTE,
    Signup,
    Login,
    PostForm,
    Button,
    Input,
    AuthLayout,
    PostCard,
    Select,
    Eye,
    EyeSlash,

}