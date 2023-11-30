import LedgerModal from "./Modal";

type AllowanceModalProps = {
    setShownModal: any;
}

export default function AllowanceModal({setShownModal}:AllowanceModalProps){
    return(
        <LedgerModal type={"income"} text={"용돈받는"} amount={10000} setShownModal={setShownModal}/>
    )
}