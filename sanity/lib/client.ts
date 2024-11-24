import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skJz9M0Ue4cSsQ9z6laccF7fkGRGrszVoG07QrJHCeuWepzfnypxE2t4RlbG6HtFKJwlraM8SPPAzvcNkfGLFSbLVuAgjBFZo2QCtNf1IPvRhwwqlBgi19UsglAKwU9dtxQR4ZIpulUDRNHbxqMBoIS45deqSmEjqZ4yrRJEgMaTYUnfKSPY",
})
