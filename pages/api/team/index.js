import { getAllTeamMembers } from "../../../util/helpers";

function handler(req, res) {
    res.status(200).json(getAllTeamMembers())
}

export default handler