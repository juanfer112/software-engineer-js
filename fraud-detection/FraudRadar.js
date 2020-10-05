const fs = require('fs')
const path = require('path')
const filesDirectory = path.join(__dirname, 'Files')
// OOP
class FraudRadar {
    static check(fileName) {
        // READ FRAUD LINES
        let orders = []
        let fraudResults = []

        const filePath = path.join(filesDirectory, fileName)

         // Defensive programming principles
        if (fs.existsSync(filePath)) {

            let fileContent = fs.readFileSync(filePath, 'utf8')
            let lines = fileContent.split('\n')

             // Defensive programming principles
            if (lines.length > 0) {                
                for (let line of lines) {
                    let items = line.split(',')
                    let order = {
                    orderId: Number(items[0]),
                    dealId: Number(items[1]),
                    email: items[2].toLowerCase(),
                    street: items[3].toLowerCase(),
                    city: items[4].toLowerCase(),
                    state: items[5].toLowerCase(),
                    zipCode: items[6],
                    creditCard: items[7]
                    }
                orders.push(order)
                }
            }   
               
        // Defensive programming principles
            if (orders.length > 0) {
                 // NORMALIZE
                for (let order of orders) {
                // Normalize email
                let aux = order.email.split('@')
                let atIndex = aux[0].indexOf('+')
                aux[0] = atIndex < 0 ? aux[0].replace('.', '') : aux[0].replace('.', '').substring(0, atIndex - 1)
                order.email = aux.join('@')

                // Normalize street
                order.street = order.street.replace('st.', 'street').replace('rd.', 'road')

                // Normalize state
                order.state = order.street.replace('il', 'illinois').replace('ca', 'california').replace('ny', 'new york')
                }
                 // CHECK FRAUD
                for (let i = 0; i < orders.length; i++) {
                    let current = orders[i]
                    let isFraudulent = false

                    for (let j = i + 1; j < orders.length; j++) {
                        isFraudulent = false

                        isFraudulent = (this.isFraudulentByCreditCard(current, orders, j) || this.isFraudulentByAddress(current, orders, j))
                    
                        if (isFraudulent) {
                            fraudResults.push({
                            isFraudulent: true,
                            orderId: orders[j].orderId
                            })
                        }
                    }
                }
            }
        }
        return fraudResults
    }

    // Maintainable + Extensible + Single responsibility principle
    static isFraudulentByCreditCard (current, orders, position) {
        return current.dealId === orders[position].dealId &&
            current.email === orders[position].email &&
            current.creditCard !== orders[position].creditCard
    }

    static isFraudulentByAddress (current, orders, position) {
        return current.dealId === orders[position].dealId &&
            current.state === orders[position].state &&
            current.zipCode === orders[position].zipCode &&
            current.street === orders[position].street &&
            current.city === orders[position].city &&
            current.creditCard !== orders[position].creditCard
    }

}

module.exports =  FraudRadar 
