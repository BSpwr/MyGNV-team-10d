import React from "reactn";
import { render } from "react-dom";

import Form from "react-jsonschema-form";
import { withRouter } from 'react-router-dom';
import { Container } from "react-bootstrap";

class editProvider extends React.Component{
    constructor(props) {
        super(props);
      }
      render() {
        const schema = {
            title: "Edit Provider",
            type: "object",
            required: ["name"],
            properties: 
            {
                name: {
                  type: "string", title: "Name", "enum":['RTS',"Taxi"]
                },
                services_provided: {
                    type: "string", title: "Services Provided"
                },
                eligibility_criteria: {
                    type: "string", title: "Eligibility Criteria"
                },
                service_area: {
                    type: "string", title: "Service Area"
                },
                addresses: {
                    title: "Address",
                    type: "object",
                    properties: {
                    line_1: {
                        type: "string", title: "Line 1"
                    },
                    line_2: {
                        type: "string", title: "Line 2"
                    },
                    city: {
                        type: "string", title: "city"
                    },
                    state: {
                        type: "string", title: "state"
                    },
                    zipcode: {
                        type: "string", title: "zip"
                    }
                    }
                },
                phone_numbers: {
                    title: "Phone Number",
                    type: "object",
                    properties: {
                        contact: {
                            type: "string", title: "Contact Name"
                        },
                        number: {
                            type: "string", title: "Number"
                        },
                    }
                },
                email: {
                    type: "string", title: "Email"
                },
                bus_routes: {
                    type: "string", title: "Bus Routes"
                },
                website: {
                    type: "string", title: "Website"
                },
                hours: {
                    title: "Hours",
                    type: "object",
                    properties: {
                    monday: {
                        type: "string", title: "Monday"
                    },
                    tuesday: {
                        type: "string", title: "Tuesday"
                    },
                    wednesday: {
                        type: "string", title: "Wednesday"
                    },
                    thursday: {
                        type: "string", title: "Thursday"
                    },
                    friday: {
                        type: "string", title: "Friday"
                    },
                    saturday: {
                        type: "string", title: "Saturday"
                    },
                    sunday: {
                        type: "string", title: "Sunday"
                    }
                    }
                },
                walk_ins: {
                    type: "string", title: "Walk Ins"
                },
                appointment: {
                    title: "Appointment",
                    type: "object",
                    properties: {
                    is_required: {
                        type: "boolean", title: " Is Required?"
                    },
                    apply_online: {
                        type: "boolean", title: " Apply Online?"
                    },
                    apply_in_person: {
                        type: "boolean", title: " Apply in Person?"
                    },
                    phone: {
                        type: "string", title: "Phone"
                    },
                    website: {
                        type: "string", title: "Website"
                    },
                    email: {
                        type: "string", title: "Eamil"
                    },
                    other_info: {
                        type: "string", title: "Other Info"
                    }
                    }
                },
                cost_info: {
                    type: "string", title: "Cost Info"
                },
                translation_available: {
                    type: "string", title: "Translation Available"
                },
                united_way_approval: {
                    type: "boolean", title: " United Way Approval?"
                },
                additional_info: {
                    type: "string", title: "Additional Info"
                },
            }
          };

          const log = (type) => console.log.bind(console, type);
          return <Container><Form schema={schema}
          onSubmit={log("submitted")}
          onError={log("errors")} /></Container>;
      }
}

export default editProvider;