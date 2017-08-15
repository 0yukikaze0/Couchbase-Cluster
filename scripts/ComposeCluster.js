/* +--------------------------------------------------------------+
 *  Quorum cluster composition script
 *  Author : Ashfaq Ahmed S
 * +--------------------------------------------------------------+*/
var fs      = require('fs');
var config  = require('config');
var inquire = require('inquirer');

/*--------------------------------------------------------------*
 * Prompts
 *--------------------------------------------------------------*/
let questions = [
    {
        type: 'input',
        name: 'clusterName',
        message : 'Enter cluster name :'
    },
    {
        type: 'input',
        name: 'nodeCount',
        message : 'Enter number of nodes :'
    },
    {
        type: 'input',
        name: 'portStart',
        message : 'Enter port number to start ranging from :'
    },
    {
        type: 'confirm',
        name: 'mapAllPorts',
        message : 'Map all ports to host ports',
        default : false
    }
]
/*--------------------------------------------------------------*/

execute = () => {

    

}

execute();