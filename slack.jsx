const command = "bash pecan/scripts/battery";
const refreshFrequency = 60000; // ms

const render = ({ output }) => <div class='screen'><div class='pecanslack'>{`Slack!`}</div></div>;

export { command, refreshFrequency, render };
