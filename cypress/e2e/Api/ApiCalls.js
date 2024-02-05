let commandUnitBaseUrl = 'https://ca-usrtskmngr-cmdapi-cm-dev.proudstone-6bc589dc.northeurope.azurecontainerapps.io'
let entityUnitBaseUrl = 'https://ca-usrtskmngr-entityapi-cm-dev.proudstone-6bc589dc.northeurope.azurecontainerapps.io'

export class ApiCalls { 

    getCommandStatusTaskId(commandID) {
      debugger;
      var limit = 0;
      return cy.request(commandUnitBaseUrl+'/api/v1/user-task/commands/'+commandID+'/status').then(function(resp) {
        if (resp.status === 200 && resp.body.status === 'COMPLETED')
          return resp.body.result.result.result.taskId;
        else if(limit === 18) 
          return null  
        
        limit = limit + 1
        cy.logg('Current status: '+resp.body.status)
        cy.wait(10000)
        return getCommandStatusTaskId(commandID)
      })
    }

    getAssesmentIdFromTask(taskID) {
      return cy.request(entityUnitBaseUrl+'/api/v1/user-task/'+taskID+'/details').then(function(resp){
        return resp.body.executionSubject.assesmentID;  
      }) 
    }

    getTask(taskID) {
      debugger;
      return cy.request(entityUnitBaseUrl+'/api/v1/user-task/'+taskID+'/details').then(function(resp){
        return resp;  
      }) 
    }

}
