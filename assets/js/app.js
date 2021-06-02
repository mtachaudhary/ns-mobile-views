// View Endpoint
let endpoint = 'https://7212826-sb1.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=247&deploy=1&compid=7212826_SB1&h=55bcdc251f81b24fd0b2';


// CHANGE
let dismissible = null;

// Menu Tuggler
function menuTuggler() {

    var menuToggler = document.getElementById("menu-toggler");
    var appTitle = document.getElementById("app-title");
    var menuCanvas = document.getElementsByClassName("menu-canvas");

    // Toggle 'open' class
    menuToggler.classList.toggle('open');

    // Check if toggler has 'open' class
    if (menuToggler.classList.contains('open')) {
        menuToggler.innerHTML = '<span class="fas fa-arrow-left"></span>'; // Change icon
        appTitle.innerHTML = 'Menu'; // Change title

        menuCanvas[0].classList.add('show'); // Add 'show' class to Menu Canvas
    } else {
        menuToggler.innerHTML = '<span class="fas fa-bars"></span>'; // Change icon
        appTitle.innerHTML = 'Dashboard'; // Change title

        menuCanvas[0].classList.remove('show'); // Add 'show' class from Menu Canvas
    }

}


// Set URL for all views
setUrl();

function setUrl() {

    // Break URL into parts
    let url = new URL(window.location.href);
    params = url.searchParams; // get URL params

    let paramsHasView = params.has('view'); // check View param
    let paramView = params.get('view'); // get View param value

    // If parameter exist
    if (paramsHasView) {
        if (paramView == 'contact') {

            // View params
            let parameters = '&rest=T&view=contact&dataset=all';

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + parameters).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { company } = data;

                    // Generate Company dropdown options
                    company.forEach(x => {
                        document.getElementById("selectCompany").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

        } else if (paramView == 'credit_card_transaction') {

            // Class params
            let classParam = '&rest=T&view=credit_card_transaction&dataset=class';

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + classParam).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { classes } = data;

                    // Generate Class dropdown options
                    classes.forEach(x => {
                        document.getElementById("selectClass").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

            // Department params
            let departmentParam = '&rest=T&view=credit_card_transaction&dataset=department';

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + departmentParam).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { department } = data;

                    // Generate Department dropdown options
                    department.forEach(x => {
                        document.getElementById("selectDepartment").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

            // Category params
            let categoryParam = '&rest=T&view=credit_card_transaction&dataset=category';

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + categoryParam).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { category } = data;

                    // Generate Category dropdown options
                    category.forEach(x => {
                        document.getElementById("selectCategory").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

            // Check if Subsidiary selected
            let subsidiaryList = document.getElementById("selectSubsidiary");

            if (!subsidiaryList.value) {

                // Subsidiary params
                let subsidiaryParam = '&rest=T&view=credit_card_transaction&dataset=subsidiary';

                // BEGIN ASYNC CALL
                getFormDataAsync(endpoint + subsidiaryParam).then(response => {

                    let jsonResponse = JSON.parse(response);

                    const { data, errors } = jsonResponse;

                    if (errors.length > 0) {
                        alert("Unexpected error when populating dropdowns");
                        console.error(errors);
                    } else {
                        const { subsidiary } = data;

                        // Generate Subsidiary dropdown options
                        subsidiary.forEach(x => {
                            document.getElementById("selectSubsidiary").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                        });
                    }

                }).catch(error => {
                    alert("Unexpected error when populating dropdowns");
                    console.error(error);
                });
                // END ASYNC CALL

                return;
            }

            console.log('NEXT');

            // Account params
            let accountParam = '&rest=T&view=credit_card_transaction&dataset=account&subsidiary=' + subsidiaryList.value;

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + accountParam).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { account } = data;

                    // Generate Account dropdown options
                    account.forEach(x => {
                        document.getElementById("selectAccount").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

            // Location params
            let locationParam = '&rest=T&view=credit_card_transaction&dataset=location&subsidiary=' + subsidiaryList.value;

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + locationParam).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { location } = data;

                    // Generate Location dropdown options
                    location.forEach(x => {
                        document.getElementById("selectLocation").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

        } else if (paramView == 'opportunity') {

            if (!params.has('step')) {
                params.set('step', 1); // set Step param value

                // Push URL parameters
                window.history.pushState({}, '', url.href);
                setUrl();
                return;
            }

            let paramStep = params.get('step'); // get Step param value

            var steps = document.getElementById("steps"); // steps element
            steps.classList.remove('hide'); // show steps

            // Activate steps
            var list = steps.querySelectorAll('ul li'); // steps list
            list.forEach(li => {
                li.getElementsByClassName("circle")[0].classList.remove('active');
                li.getElementsByClassName("step-title")[0].classList.remove('activeh');
            });
            var stepCount = Number(paramStep) - 1;
            list[stepCount].getElementsByClassName("circle")[0].classList.add('active');
            list[stepCount].getElementsByClassName("step-title")[0].classList.add('activeh');

            // Initially hide all forms
            document.getElementById("step-one").classList.add('hide');
            document.getElementById("step-two").classList.add('hide');
            document.getElementById("step-three").classList.add('hide');

            let creditCardData = { "data": { "account": [{ "id": "111", "name": "Accounts Payable" }, { "id": "119", "name": "Accounts Receivable" }, { "id": "112", "name": "Accrued Purchases" }, { "id": "212", "name": "Accumulated Depreciation" }, { "id": "118", "name": "Advances Paid" }, { "id": "1", "name": "Checking" }, { "id": "214", "name": "Cost of Goods Sold" }, { "id": "218", "name": "Credit Card" }, { "id": "109", "name": "Cumulative Translation Adjustment" }, { "id": "211", "name": "Deferred Expense" }, { "id": "114", "name": "Estimates" }, { "id": "58", "name": "Expenses" }, { "id": "213", "name": "Inventory Asset" }, { "id": "216", "name": "Inventory In Transit" }, { "id": "53", "name": "Opening Balance" }, { "id": "124", "name": "Opportunities" }, { "id": "115", "name": "Purchase Orders" }, { "id": "121", "name": "Purchases Returned Not Credited" }, { "id": "123", "name": "Refunds Payable" }, { "id": "52", "name": "Retained Earnings" }, { "id": "113", "name": "Return Authorizations" }, { "id": "217", "name": "Rounding Gain/Loss" }, { "id": "54", "name": "Sales" }, { "id": "116", "name": "Sales Orders" }, { "id": "210", "name": "Sales Taxes Payable WY" }, { "id": "108", "name": "Shipping and Handling" }, { "id": "215", "name": "Transfer Orders" }, { "id": "110", "name": "Unapproved Customer Payments" }, { "id": "117", "name": "Unapproved Expense Reports" }, { "id": "122", "name": "Undeposited Funds" }, { "id": "120", "name": "{#Vendor Return Authorizations#}" }], "class": [{ "id": "1", "name": "Class-A" }, { "id": "2", "name": "Class-B" }, { "id": "3", "name": "Class-C" }, { "id": "4", "name": "Class-D" }], "department": [{ "id": "1", "name": "Administrative" }, { "id": "2", "name": "Operations" }, { "id": "3", "name": "Sales" }], "location": [{ "id": "3", "name": "US-1" }, { "id": "4", "name": "US-2" }, { "id": "1", "name": "Warehouse 1" }, { "id": "2", "name": "Warehouse 2" }], "subsidiary": [{ "id": "1", "name": "Parent Company" }] }, "errors": [] };
            let phoneCallData = { "data": { "contact": [{ "id": "14", "name": "Max Baker" }, { "id": "225", "name": "Jim Davis" }], "customer": [{ "id": "6", "name": "Jose Pablo Ramirez" }, { "id": "17", "name": "Dansby Swanson" }, { "id": "18", "name": "Dave Smith" }, { "id": "19", "name": "John Davidson" }, { "id": "20", "name": "Jordan Burch" }, { "id": "21", "name": "Mike Soroka" }, { "id": "22", "name": "Ronald AcuÃ±a Jr" }, { "id": "23", "name": "Louisiana Nursery Outlet" }, { "id": "24", "name": "Austin Riley" }, { "id": "25", "name": "Johan Camargo" }, { "id": "26", "name": "Nick Markakis" }, { "id": "27", "name": "Tyler Flowers" }, { "id": "28", "name": "Virtucon" }, { "id": "29", "name": "Erin Balfour" }, { "id": "30", "name": "Christopher Couch" }, { "id": "31", "name": "James Peltier" }, { "id": "117", "name": "Facebook" }, { "id": "118", "name": "Atlas Communication" }, { "id": "119", "name": "Blue Pumpkin" }, { "id": "120", "name": "Roman Industries" }, { "id": "121", "name": "Altima Technology" }, { "id": "122", "name": "Bain Consulting" }, { "id": "123", "name": "Above The Cloud" }, { "id": "124", "name": "Baker Services" }, { "id": "125", "name": "Daiichie Systems" }, { "id": "126", "name": "AT&T" }, { "id": "127", "name": "ABC Co." }, { "id": "128", "name": "Bella Consulting" }, { "id": "129", "name": "Paxton Consulting" }, { "id": "130", "name": "West Campus SCRH" }, { "id": "131", "name": "Marty Nickels" }, { "id": "132", "name": "Freddie Freeman" }, { "id": "133", "name": "Mike Foltynewicz" }, { "id": "134", "name": "Ozzie Albies" }, { "id": "135", "name": "Sue Wright" }, { "id": "136", "name": "Travis d'Arnaud" }, { "id": "137", "name": "Altair" }, { "id": "138", "name": "Canon Enterprises" }, { "id": "139", "name": "Children's Hospital & Medical Center" }, { "id": "140", "name": "Data" }, { "id": "141", "name": "EHS INC." }, { "id": "142", "name": "Hooli" }, { "id": "143", "name": "HTG Enterprises" }, { "id": "144", "name": "Mind the Gap - US East" }, { "id": "145", "name": "Oceanic Airlines" }, { "id": "146", "name": "Pineapple Republic - US East" }, { "id": "147", "name": "SkateOn Enterprises" }, { "id": "148", "name": "Torres Holdings" }], "organizer": [{ "id": "9", "name": "Dave Tanner" }, { "id": "7", "name": "Eric Aanerud" }, { "id": "10", "name": "Joshua Nacey" }, { "id": "-5", "name": "Katie Christensen" }, { "id": "3", "name": "Pablo Ramirez" }, { "id": "4", "name": "Ritesh Patil" }, { "id": "217", "name": "Tucker Christensen" }], "status": [{ "id": "COMPLETE", "name": "Completed" }, { "id": "SCHEDULED", "name": "Scheduled" }] }, "errors": [] };

            if (paramStep == 1) {
                document.getElementById("step-one").classList.remove('hide');

                // Generate Subsidiary dropdown options
                creditCardData.data.subsidiary.forEach(x => {
                    document.getElementById("selectOpportunitySubsidiary").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                });

                // Generate Customer dropdown options
                phoneCallData.data.customer.forEach(x => {
                    document.getElementById("selectOpportunityCustomer").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                });

                // Generate Contact dropdown options
                phoneCallData.data.contact.forEach(x => {
                    document.getElementById("selectOpportunityContact").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                });
            } else if (paramStep == 2) {
                document.getElementById("step-two").classList.remove('hide');

                // Generate Status dropdown options
                phoneCallData.data.status.forEach(x => {
                    document.getElementById("selectOpportunityStatus").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                });
            } else if (paramStep == 3) {
                document.getElementById("step-three").classList.remove('hide');

                // Generate Department dropdown options
                creditCardData.data.department.forEach(x => {
                    document.getElementById("selectOpportunityDepartment").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                });

                // Generate Class dropdown options
                creditCardData.data.class.forEach(x => {
                    document.getElementById("selectOpportunityClass").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                });

                // Generate Location dropdown options
                creditCardData.data.location.forEach(x => {
                    document.getElementById("selectOpportunityLocation").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                });
            }

        } else if (paramView == 'customer') {

            // View params
            let parameters = '&rest=T&view=customer&dataset=all';

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + parameters).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { status, industry } = data;

                    // Generate Status dropdown options
                    status.forEach(x => {
                        document.getElementById("selectStatus").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });

                    // Generate Industry dropdown options
                    industry.forEach(x => {
                        document.getElementById("selectIndustry").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

        } else if (paramView == 'phone_call') {

            // Organizer params
            let organizerParam = '&rest=T&view=phone_call&dataset=organizer';

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + organizerParam).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { organizer } = data;

                    // Generate Priority dropdown options
                    organizer.forEach(x => {
                        document.getElementById("selectOrganizer").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

            // Status params
            let statusParam = '&rest=T&view=phone_call&dataset=status';

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + statusParam).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { status } = data;

                    // Generate Priority dropdown options
                    status.forEach(x => {
                        document.getElementById("selectCallStatus").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

            // Check if Customer selected
            let customerList = document.getElementById("selectCustomer");

            if (!customerList.value) {

                // Customer params
                let customerParam = '&rest=T&view=phone_call&dataset=customer';

                // BEGIN ASYNC CALL
                getFormDataAsync(endpoint + customerParam).then(response => {

                    let jsonResponse = JSON.parse(response);

                    const { data, errors } = jsonResponse;

                    if (errors.length > 0) {
                        alert("Unexpected error when populating dropdowns");
                        console.error(errors);
                    } else {
                        const { customer } = data;

                        // Generate Customer dropdown options
                        customer.forEach(x => {
                            document.getElementById("selectCustomer").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                        });
                    }

                }).catch(error => {
                    alert("Unexpected error when populating dropdowns");
                    console.error(error);
                });
                // END ASYNC CALL

                return;
            }

            console.log('NEXT');

            // Conatct params
            let conatctParam = '&rest=T&view=phone_call&dataset=contact&customer=' + customerList.value;

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + conatctParam).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { contact } = data;

                    // Generate Contact dropdown options
                    contact.forEach(x => {
                        document.getElementById("selectContact").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

        } else if (paramView == 'task') {

            // View params
            let parameters = '&rest=T&view=task&dataset=all';

            // BEGIN ASYNC CALL
            getFormDataAsync(endpoint + parameters).then(response => {

                let jsonResponse = JSON.parse(response);

                const { data, errors } = jsonResponse;

                if (errors.length > 0) {
                    alert("Unexpected error when populating dropdowns");
                    console.error(errors);
                } else {
                    const { assigned_to, priority, status } = data;

                    // Generate Priority dropdown options
                    priority.forEach(x => {
                        document.getElementById("task_priority").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });

                    // Generate Assigned_To dropdown options
                    assigned_to.forEach(x => {
                        document.getElementById("task_assigned_to").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });

                    // Generate Status dropdown options
                    status.forEach(x => {
                        document.getElementById("task_status").innerHTML += '<option value="' + x.id + '">' + x.name + '</option>';
                    });
                }

            }).catch(error => {
                alert("Unexpected error when populating dropdowns");
                console.error(error);
            });
            // END ASYNC CALL

        }
    }
}


// Submit All Forms
var forms = document.querySelectorAll("form");
forms.forEach(form => { form.onsubmit = submitAllForms; });

function submitAllForms(e) {
    e.preventDefault();

    // Break URL into parts
    let url = new URL(window.location.href);
    params = url.searchParams; // get URL params

    let paramsHasView = params.has('view'); // check View param
    let paramView = params.get('view'); // get View param value

    let paramsHasStep = params.has('step'); // check Step param
    let paramStep = params.get('step'); // get Step param value

    // Fetch form fields
    var form = document.forms[this.id]; // Get form HTML by id
    var data = Object.fromEntries(new FormData(form));

    // Initialize notifier
    initNotifier();

    // Post request params
    let parameters = '';

    // Declare message variables
    let infoMessage = '';
    let successMessage = '';
    let errorMessage = '';

    // Rotating in step forms
    if (paramsHasView && paramView == 'opportunity') {
        if (paramsHasStep) {
            var stepCount = Number(paramStep) + 1;
            if (stepCount <= 3) {
                params.set('step', stepCount); // set Step param value

                // Push URL parameters
                window.history.pushState({}, '', url.href);
                setUrl();
            }
        }
    }

    if (paramsHasView && paramView == 'contact') {

        // Modify post request body
        data = {
            "first_name": data.fname,
            "last_name": data.lname,
            "company": data.company,
            "email": data.email,
            "phone": data.countryCode + data.phone,
        };

        console.log(data);

        // Post request URL parameters
        parameters = '&view=contact';

        // Messages
        infoMessage = 'Creating a new contact...';
        successMessage = 'Contact was sucessfully created';
        errorMessage = 'Error during contact creation';

    } else if (paramsHasView && paramView == 'credit_card_transaction') {

        // Modify post request body
        data = {
            "subsidiary": data.subsidiary,
            "account": data.account,
            "amount": data.amount,
            "memo": data.memo,
            "location": data.location,
            "department": data.department,
            "class": data.class,
            "category": data.category,
        };

        console.log(data);

        // Post request URL parameters
        parameters = '&view=credit_card_transaction';

        // Messages
        infoMessage = 'Creating a new credit card transaction...';
        successMessage = 'Credit card transaction was sucessfully created';
        errorMessage = 'Error during credit card transaction creation';

    } else if (paramsHasView && paramView == 'customer') {

        // Modify post request body
        data = {
            "name": data.customer_name,
            "status": data.customer_status,
            "email": data.customer_email,
            "phone": data.countryCode + data.customer_phone,
            "comments": data.customer_comments,
            "industry": data.customer_industry,
        };

        console.log(data);

        // Post request URL parameters
        parameters = '&view=customer';

        // Messages
        infoMessage = 'Creating a new customer...';
        successMessage = 'Customer was sucessfully created';
        errorMessage = 'Error during customer creation';

    } else if (paramsHasView && paramView == 'phone_call') {

        // Modify post request body
        data = {
            "customer": data.customer,
            "contact": data.contact,
            "organizer": data.organizer,
            "subject": data.subject,
            "status": data.status,
            "date": data.phone_date,
        };

        console.log(data);

        // Post request URL parameters
        parameters = '&view=phone_call';

        // Messages
        infoMessage = 'Creating a new phone call...';
        successMessage = 'Phone call was sucessfully created';
        errorMessage = 'Error during phone call creation';

    } else if (paramsHasView && paramView == 'task') {

        // Modify post request body
        data = {
            "title": data.title,
            "priority": data.priority,
            "assigned_to": data.assigned_to,
            "email": data.email,
            "status": data.status,
            "date": data.due_date,
        };

        console.log(data);

        // Post request URL parameters
        parameters = '&view=task';

        // Messages
        infoMessage = 'Creating a new task...';
        successMessage = 'Task was sucessfully created';
        errorMessage = 'Error during task creation';

    }

    // Convert JSON object to string
    let dataStringJSON = JSON.stringify(data);
    console.log(dataStringJSON);

    // Info notification
    showNotification(infoMessage, "INFO");

    // Send forms data 
    sendFormDataAsync(endpoint + parameters, dataStringJSON)
        .then(response => {
            showNotification(successMessage, "SUCCESS");
        }).catch(error => {
            showNotification(errorMessage, "ERROR");
            console.error(error);
        });

}


// Step forms Previous button
var formPrevBtn = document.querySelectorAll(".form-previous");
formPrevBtn.forEach(btn => {
    btn.onclick = function() {

        // Break URL into parts
        let url = new URL(window.location.href);
        params = url.searchParams; // get URL params

        let paramStep = params.get('step'); // get Step param value

        // Rotating in step forms
        var stepCount = Number(paramStep) - 1;
        params.set('step', stepCount); // set Step param value

        // Push URL parameters
        window.history.pushState({}, '', url.href);
        setUrl();
    }
});


// Get Form Data
function getFormDataAsync(url) {

    var myHeaders = new Headers();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(url, requestOptions).then(response => response.text());
};


// CHANGE
function sendFormDataAsync(url, data) {
    var headers = new Headers();

    var requestedOptions = {
        method: 'POST',
        headers: headers,
        redirect: 'follow',
        body: data
    }

    console.log("sendFormDataAsync", data);

    return fetch(url, requestedOptions).then(response => response.text());
}

// CHANGE
function initNotifier() {
    console.log("initNotifierinitNotifier")
    const ID = "dismissible-container";
    dismissible = new Dismissible(document.querySelector('#' + ID));
}

// CHANGE
function showNotification(message, type) {

    // Move cursor to the top
    window.scrollTo(0, 0);

    if (type === "INFO") {
        dismissible.info(message);
    }

    if (type === "ERROR") {
        dismissible.error(message);
    }

    if (type === "SUCCESS") {
        dismissible.success(message);

        // Redirect to index View after delay
        setTimeout(() => {
            window.location = `${endpoint}&view=index`;
        }, 2000);
    }

}


// File Handler
function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    console.log('file: ' + file);
    const reader = new FileReader();
    console.log('reader: ' + reader);

    reader.addEventListener("load", function() {
        // convert image file to base64 string
        preview.src = reader.result;
        console.log('result: ' + reader.result);
    });

    if (file) {
        reader.readAsDataURL(file);
        console.log('readAsDataURL: ' + reader.readAsDataURL(file));
    }
}

previewFile();