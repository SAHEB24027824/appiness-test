

const User = require('../../model/user');
const Transection = require('../../model/transection');

async function transection(req, res) {
    try {
        let senderid = req.body.senderid;
        let amount = req.body.amount;
        let send = await User.updateOne({ _id: senderid }, { $inc: { amount: -amount } });
        let newTransfered = new Transection({
            senderid:senderid,
            receiverid:req.body.receiverid,
            sendername:req.body.sendername,
            receivername:req.body.receivername,
            amount:amount,
            acoutbalance:req.body.acoutbalance,
            status:'Transfered',
            unique:senderid
        })
        let transfered=await newTransfered.save()
        if(transfered){
            let receive = await User.updateOne({ _id: req.body.receiverid }, { $inc: { amount:amount } });
            let newreceived = new Transection({
                senderid:senderid,
                receiverid:req.body.receiverid,
                sendername:req.body.sendername,
                receivername:req.body.receivername,
                amount:amount,
                acoutbalance:req.body.acoutbalance+amount,
                status:'Received',
                unique:req.body.receiverid
            })
            let received=await newreceived.save()
            if(received) return res.status(200).send(true)
            return res.status(400).send(false)
        }

    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports=transection;