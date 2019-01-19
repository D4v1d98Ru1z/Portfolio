# Application Structure

This is how's going to be the structure of the components.

```
Home 
│
└─── Header (Smart)
│   │   Header Layout (UI) 
│   │
│   └───Logo (Smart)
│   │   │
│   │   └─── Logo (UI)
│   │ 
│   └───Links (Smart)
│       │
│       └─── List Links (UI)
│    
│   
└─── Content (Smart)
    │   Content Layout (UI)
    │
    └───Welcome (Smart) -> State
    │   │
    │   └─── Hello (UI)
    │ 
    └───About (Smart)
    |   │
    |   └───About (UI)
    │ 
    └───Skills (Smart)
    |   │
    |   └─── Skills (UI)
    │ 
    └─── Projects (Smart)
    |   │
    |   └─── Projects (UI)
    │ 
    └─── Recomendations (Smart)
    |   │
    |   └─── Recomendations (UI)
    │ 
    └─── Contact (Smart) -> State
    |   │
    |   └─── Contact (UI)
    │ 
    └─── Footer (Smart)
        │
        └─── Footer (UI)

```