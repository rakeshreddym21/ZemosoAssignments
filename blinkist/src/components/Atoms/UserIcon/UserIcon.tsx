import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

interface Props{
    className?:string
}


const UserIcon:React.FunctionComponent<Props> = (props)=>
{
    return(
        <>
        <PersonOutlineIcon className={props.className} />
        </>

    );

}

export default UserIcon;