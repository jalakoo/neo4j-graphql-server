export const manualTypeDefs = `#graphql
type User {
  name: String!
  operatesVehicle: Vehicle @relationship(type: "OPERATES", direction: OUT)
  currentlyAtLocation: Location @relationship(type: "CURRENTLY_AT", direction: OUT)
  madeRequest: Request @relationship(type: "MADE", direction: OUT)
}

type Vehicle {
  type: String!
  name: String!
  image_url: String!
  userOperates: User @relationship(type: "OPERATES", direction: IN)
  currentlyAtLocation: Location @relationship(type: "CURRENTLY_AT", direction: OUT)
  acceptedRequest: Request @relationship(type: "ACCEPTED", direction: OUT)
  rejectedRequest: Request @relationship(type: "REJECTED", direction: OUT)
}

type Location {
  lat: Float!
  lon: Float!
  userCurrentlyAt: User @relationship(type: "CURRENTLY_AT", direction: IN)
  vehicleCurrentlyAt: Vehicle @relationship(type: "CURRENTLY_AT", direction: IN)
  requestPickup: Request @relationship(type: "PICKUP", direction: IN)
  requestDropOff: Request @relationship(type: "DROP_OFF", direction: IN)
}

type Request {
  at: DateTime!
  userMade: User @relationship(type: "MADE", direction: IN)
  vehicleAccepted: Vehicle @relationship(type: "ACCEPTED", direction: IN)
  vehicleRejected: Vehicle @relationship(type: "REJECTED", direction: IN)
  pickupLocation: Location @relationship(type: "PICKUP", direction: OUT)
  dropOffLocation: Location @relationship(type: "DROP_OFF", direction: OUT)
}
`;