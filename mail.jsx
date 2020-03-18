const command = "bash pecan/scripts/mail";
const refreshFrequency = 1000; // ms

const render = ({ output }) => <div class='screen'><div class='pecanmail'>{`📨 ${output}`}</div></div>;

export { command, refreshFrequency, render };
