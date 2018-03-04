exports.execute = (client, message, args) => {
    client.generateInvite().then(link => {
        message.channel.send("Invite me to your guild(server) with this link \n" + link);
    });
};

// TODO fix embed + code tags for nice link

exports.info = {
    name: "invite",
    alias: ["inv"],
    permission: "default",
    type: "general"
};