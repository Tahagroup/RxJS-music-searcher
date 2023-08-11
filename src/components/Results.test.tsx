import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Results from "./Results";
import App from "../App";

const testData = {
  created: "2022-12-20T15:46:26.266Z",
  count: 41417,
  offset: 0,
  recordings: [
    {
      id: "8f34f309-e574-4dbf-a5c2-62a1ff5f9dfc",
      score: 100,
      title: "TEST TEST TEST",
      video: null,
      "artist-credit": [
        {
          name: "デラシネ",
          artist: {
            id: "477d7a5b-bcf3-440d-9fed-ed795ccf74bd",
            name: "デラシネ",
            "sort-name": "デラシネ",
          },
        },
      ],
      "first-release-date": "2006-02-08",
      releases: [
        {
          id: "e36d00b4-35a3-4f13-b194-24926b204fc3",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "1st",
          status: "Official",
          "release-group": {
            id: "7740281a-b64f-445e-80f8-74b1df2f21e0",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "1st",
            "primary-type": "Album",
          },
          date: "2006-02-08",
          country: "JP",
          "release-events": [
            {
              date: "2006-02-08",
              area: {
                id: "2db42837-c832-3c27-b4a3-08198f75693c",
                name: "Japan",
                "sort-name": "Japan",
                "iso-3166-1-codes": ["JP"],
              },
            },
          ],
          "track-count": 14,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "1cd414e4-c631-48ac-90c9-af34b30e0a0f",
                  number: "8",
                  title: "TEST TEST TEST",
                },
              ],
              "track-count": 14,
              "track-offset": 7,
            },
          ],
        },
      ],
    },
    {
      id: "1d3f3906-1760-4e26-87bc-ff6e833a2ec1",
      score: 100,
      title: "Test! Test! Test!",
      length: 78197,
      video: null,
      "artist-credit": [
        {
          name: "David Holmes",
          artist: {
            id: "a53f5eed-f9f1-4cf1-9994-4c9374904790",
            name: "David Holmes",
            "sort-name": "Holmes, David",
            disambiguation: "Northern Irish musician and score composer",
            aliases: [
              {
                "sort-name": "Death Before Disco",
                "type-id": "1937e404-b981-3cb7-8151-4c86ebfc8d8e",
                name: "Death Before Disco",
                locale: null,
                type: "Search hint",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "David Homes",
                "type-id": "1937e404-b981-3cb7-8151-4c86ebfc8d8e",
                name: "David Homes",
                locale: null,
                type: "Search hint",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "Holmes, David",
                "type-id": "894afba6-2816-3c24-8072-eadb66bd04bc",
                name: "David Holmes",
                locale: null,
                type: "Artist name",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "Holmes, David Peter",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                name: "David Peter Holmes",
                locale: null,
                type: "Legal name",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "2022-10-26",
      releases: [
        {
          id: "cac5f89d-33b9-46b1-b944-c9ac6282b731",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "This England",
          status: "Official",
          "artist-credit": [
            {
              name: "David Holmes",
              artist: {
                id: "a53f5eed-f9f1-4cf1-9994-4c9374904790",
                name: "David Holmes",
                "sort-name": "Holmes, David",
                disambiguation: "Northern Irish musician and score composer",
              },
            },
          ],
          "release-group": {
            id: "d217dbc6-9207-4e26-9a7c-05bb3fa26718",
            "type-id": "22a628ad-c082-3c4f-b1b6-d41665107b88",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "This England",
            "primary-type": "Album",
            "secondary-types": ["Soundtrack"],
            "secondary-type-ids": ["22a628ad-c082-3c4f-b1b6-d41665107b88"],
          },
          date: "2022-10-26",
          country: "XW",
          "release-events": [
            {
              date: "2022-10-26",
              area: {
                id: "525d4e18-3d00-31b9-a58b-a146a916de8f",
                name: "[Worldwide]",
                "sort-name": "[Worldwide]",
                "iso-3166-1-codes": ["XW"],
              },
            },
          ],
          "track-count": 17,
          media: [
            {
              position: 1,
              format: "Digital Media",
              track: [
                {
                  id: "a329995c-2fab-44f4-9e5b-9708678945f1",
                  number: "12",
                  title: "Test! Test! Test!",
                  length: 78197,
                },
              ],
              "track-count": 17,
              "track-offset": 11,
            },
          ],
        },
      ],
      isrcs: ["UK9AV2201477"],
    },
    {
      id: "48f9c6cf-491c-4114-aa63-a958831cfd2f",
      score: 96,
      title: "Test... Test...",
      video: null,
      "artist-credit": [
        {
          name: "The Panics",
          artist: {
            id: "73109d0a-dc19-43da-8752-12846493a154",
            name: "The Panics",
            "sort-name": "Panics, The",
            disambiguation: "USA punk band from Florida",
          },
        },
      ],
      "first-release-date": "1980",
      releases: [
        {
          id: "ed6a3bb0-d787-4b64-880e-ee542691d3b0",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Test... Test...",
          status: "Official",
          "release-group": {
            id: "cbd45f37-9560-3d16-851b-a0c293aecb7c",
            "type-id": "d6038452-8ee0-3f68-affc-2de9a1ede0b9",
            "primary-type-id": "d6038452-8ee0-3f68-affc-2de9a1ede0b9",
            title: "Test... Test...",
            "primary-type": "Single",
          },
          date: "1980",
          country: "US",
          "release-events": [
            {
              date: "1980",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 2,
          media: [
            {
              position: 1,
              format: "Vinyl",
              track: [
                {
                  id: "5e47cb44-d57b-3481-8dab-70abd256468b",
                  number: "1",
                  title: "Test... Test...",
                },
              ],
              "track-count": 2,
              "track-offset": 0,
            },
          ],
        },
      ],
    },
    {
      id: "aad04c9e-a532-42d1-b2c5-2e46b3ef2c4e",
      score: 96,
      title: "Test-Test",
      length: 234000,
      video: null,
      "artist-credit": [
        {
          name: "Six Minute War Madness",
          artist: {
            id: "12cf2b87-2775-405c-a589-199d94295419",
            name: "Six Minute War Madness",
            "sort-name": "Six Minute War Madness",
          },
        },
      ],
      "first-release-date": "1997",
      releases: [
        {
          id: "d2583d5b-3734-4188-9378-b7965dfb373f",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Il vuoto elettrico",
          status: "Official",
          "release-group": {
            id: "0a8c5e58-2556-4556-8f2e-36bb4df7be9a",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Il vuoto elettrico",
            "primary-type": "Album",
          },
          date: "1997",
          country: "IT",
          "release-events": [
            {
              date: "1997",
              area: {
                id: "c6500277-9a3d-349b-bf30-41afdbf42add",
                name: "Italy",
                "sort-name": "Italy",
                "iso-3166-1-codes": ["IT"],
              },
            },
          ],
          "track-count": 14,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "a30684bc-b5cc-383b-83b0-464ef08996fb",
                  number: "2",
                  title: "Test-Test",
                  length: 234000,
                },
              ],
              "track-count": 14,
              "track-offset": 1,
            },
          ],
        },
      ],
    },
    {
      id: "6a377504-9c3c-4577-b5d6-78b620ef477d",
      score: 96,
      title: '"Test, Test"',
      length: 96000,
      video: null,
      "artist-credit": [
        {
          name: "Sha Na Na",
          artist: {
            id: "86aa8b2d-be7e-489c-a1b7-80e814fb6815",
            name: "Sha Na Na",
            "sort-name": "Sha Na Na",
            disambiguation: "American rock and roll doo-wop group",
            aliases: [
              {
                "sort-name": "Shanana",
                name: "Shanana",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "Cha Na Na",
                name: "Cha Na Na",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "Sha-Na-Na",
                name: "Sha-Na-Na",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "2019-08-02",
      releases: [
        {
          id: "6ab97b08-6cbf-4fd4-9e80-470181373b1c",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 38,
          title:
            "Woodstock - Back to the Garden: The Definitive 50th Anniversary Archive",
          status: "Official",
          "artist-credit": [
            {
              name: "Various Artists",
              artist: {
                id: "89ad4ac3-39f7-470e-963a-56509c546377",
                name: "Various Artists",
                "sort-name": "Various Artists",
                disambiguation: "add compilations to this artist",
              },
            },
          ],
          "release-group": {
            id: "4d585bb6-d062-43be-ab28-739924335902",
            "type-id": "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title:
              "Woodstock - Back To The Garden: The Definitive 50th Anniversary Archive",
            "primary-type": "Album",
            "secondary-types": ["Live", "Compilation"],
            "secondary-type-ids": [
              "6fd474e2-6b58-3102-9d17-d6f7eb7da0a0",
              "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            ],
          },
          "track-count": 432,
          media: [
            {
              position: 35,
              format: "CD",
              track: [
                {
                  id: "0ffeadb0-7860-4149-857e-61b90ae0a297",
                  number: "1",
                  title: '"Test, Test"',
                  length: 96000,
                },
              ],
              "track-count": 13,
              "track-offset": 0,
            },
          ],
        },
        {
          id: "d29fc984-6110-4a20-a6fd-124606e6d6bd",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 36,
          title:
            "Woodstock - Back To The Garden: The Definitive 50th Anniversary Archive",
          status: "Official",
          disambiguation: "24bit 96kHz",
          "artist-credit": [
            {
              name: "Various Artists",
              artist: {
                id: "89ad4ac3-39f7-470e-963a-56509c546377",
                name: "Various Artists",
                "sort-name": "Various Artists",
                disambiguation: "add compilations to this artist",
              },
            },
          ],
          "release-group": {
            id: "4d585bb6-d062-43be-ab28-739924335902",
            "type-id": "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title:
              "Woodstock - Back To The Garden: The Definitive 50th Anniversary Archive",
            "primary-type": "Album",
            "secondary-types": ["Live", "Compilation"],
            "secondary-type-ids": [
              "6fd474e2-6b58-3102-9d17-d6f7eb7da0a0",
              "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            ],
          },
          date: "2020-08-14",
          country: "XW",
          "release-events": [
            {
              date: "2020-08-14",
              area: {
                id: "525d4e18-3d00-31b9-a58b-a146a916de8f",
                name: "[Worldwide]",
                "sort-name": "[Worldwide]",
                "iso-3166-1-codes": ["XW"],
              },
            },
          ],
          "track-count": 416,
          media: [
            {
              position: 35,
              format: "Digital Media",
              track: [
                {
                  id: "3dd8bfe8-69f0-4507-ac52-cb27cbc05106",
                  number: "1",
                  title: '"Test, Test"',
                  length: 96000,
                },
              ],
              "track-count": 13,
              "track-offset": 0,
            },
          ],
        },
      ],
    },
    {
      id: "34e5bfbb-8816-4755-a532-f66922c6cf72",
      score: 96,
      title: "Test Test",
      length: 9000,
      video: null,
      "artist-credit": [
        {
          name: "U.S. Girls",
          artist: {
            id: "036912f5-c717-498d-8958-6058de17bb70",
            name: "U.S. Girls",
            "sort-name": "U.S. Girls",
            aliases: [
              {
                "sort-name": "US Girls",
                "type-id": "1937e404-b981-3cb7-8151-4c86ebfc8d8e",
                name: "US Girls",
                locale: null,
                type: "Search hint",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "2011-11-01",
      releases: [
        {
          id: "a4ffc889-eb01-43af-b634-5df201fcd134",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "U.S. Girls on KRAAK",
          status: "Official",
          "artist-credit": [
            {
              name: "U.S. Girls",
              artist: {
                id: "036912f5-c717-498d-8958-6058de17bb70",
                name: "U.S. Girls",
                "sort-name": "U.S. Girls",
              },
            },
          ],
          "release-group": {
            id: "56887274-2340-43bd-bd9f-36e2c159e53e",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "U.S. Girls on KRAAK",
            "primary-type": "Album",
          },
          date: "2011-11-01",
          country: "BE",
          "release-events": [
            {
              date: "2011-11-01",
              area: {
                id: "5b8a5ee5-0bb3-34cf-9a75-c27c44e341fc",
                name: "Belgium",
                "sort-name": "Belgium",
                "iso-3166-1-codes": ["BE"],
              },
            },
          ],
          "track-count": 12,
          media: [
            {
              position: 1,
              format: "Digital Media",
              track: [
                {
                  id: "b836547d-c190-4201-bbf5-3020ce685e88",
                  number: "1",
                  title: "Test Test Test",
                  length: 9000,
                },
              ],
              "track-count": 12,
              "track-offset": 0,
            },
          ],
        },
        {
          id: "dd70f19c-0e31-4672-ba44-a2cd9001f628",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "U.S. GIRLS on KRAAK",
          status: "Official",
          "artist-credit": [
            {
              name: "U.S. Girls",
              artist: {
                id: "036912f5-c717-498d-8958-6058de17bb70",
                name: "U.S. Girls",
                "sort-name": "U.S. Girls",
              },
            },
          ],
          "release-group": {
            id: "56887274-2340-43bd-bd9f-36e2c159e53e",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "U.S. Girls on KRAAK",
            "primary-type": "Album",
          },
          date: "2011-11-01",
          country: "BE",
          "release-events": [
            {
              date: "2011-11-01",
              area: {
                id: "5b8a5ee5-0bb3-34cf-9a75-c27c44e341fc",
                name: "Belgium",
                "sort-name": "Belgium",
                "iso-3166-1-codes": ["BE"],
              },
            },
          ],
          "track-count": 12,
          media: [
            {
              position: 1,
              format: '12" Vinyl',
              track: [
                {
                  id: "ea0453eb-8a47-3602-9acd-75d81a1ea1b5",
                  number: "1",
                  title: "Test Test",
                },
              ],
              "track-count": 12,
              "track-offset": 0,
            },
          ],
        },
      ],
    },
    {
      id: "65d9da68-c8f4-409c-a8c5-398d05349586",
      score: 88,
      title: "Hello Test Test",
      length: 51880,
      video: null,
      "artist-credit": [
        {
          joinphrase: " feat. ",
          name: "Count Bass D",
          artist: {
            id: "18c9e1ac-840d-4d30-86a0-16b2f608b20f",
            name: "Count Bass D",
            "sort-name": "Count Bass D",
          },
        },
        {
          joinphrase: " & ",
          name: "Cana",
          artist: {
            id: "467d02bb-35fd-4df2-89e6-732854497079",
            name: "Cana",
            "sort-name": "Cana",
            disambiguation: "Hip-Hop Artist",
          },
        },
        {
          name: "Hezekiah",
          artist: {
            id: "494793f1-6e03-4b4b-baf0-3eeef73bbe1a",
            name: "Hezekiah",
            "sort-name": "Hezekiah",
          },
        },
      ],
      "first-release-date": "2002",
      releases: [
        {
          id: "fbc5ecb6-d22a-41dd-8495-800ff8ebeeac",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Dwight Spitz",
          status: "Official",
          "artist-credit": [
            {
              name: "Count Bass D",
              artist: {
                id: "18c9e1ac-840d-4d30-86a0-16b2f608b20f",
                name: "Count Bass D",
                "sort-name": "Count Bass D",
              },
            },
          ],
          "release-group": {
            id: "e5b23a4c-a27c-39ab-a9c8-3058ad741f52",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Dwight Spitz",
            "primary-type": "Album",
          },
          date: "2002",
          country: "US",
          "release-events": [
            {
              date: "2002",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 24,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "d9752c12-2eb9-3156-a96e-84f27b34e2c7",
                  number: "13",
                  title: "Hello Test Test",
                  length: 51880,
                },
              ],
              "track-count": 24,
              "track-offset": 12,
            },
          ],
        },
      ],
    },
    {
      id: "fea50d8f-9295-4d68-8a7c-a0ed950ca4d8",
      score: 88,
      title: "Test by Test",
      length: 360000,
      video: null,
      "artist-credit": [
        {
          name: "Detacher",
          artist: {
            id: "c118c50b-a071-4b47-9081-8d618544c2d8",
            name: "Detacher",
            "sort-name": "Detacher",
          },
        },
      ],
      "first-release-date": "2007-08-31",
      releases: [
        {
          id: "d58eb7cc-e98c-48da-a471-037614e5ff35",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 2,
          title: "Deep Trance Anthems",
          status: "Official",
          "artist-credit": [
            {
              name: "Various Artists",
              artist: {
                id: "89ad4ac3-39f7-470e-963a-56509c546377",
                name: "Various Artists",
                "sort-name": "Various Artists",
                disambiguation: "add compilations to this artist",
              },
            },
          ],
          "release-group": {
            id: "0a197ac7-bb8d-44be-b147-0313fc4e6476",
            "type-id": "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Deep Trance Anthems",
            "primary-type": "Album",
            "secondary-types": ["Compilation"],
            "secondary-type-ids": ["dd2a21e1-0c00-3729-a7a0-de60b84eb5d1"],
          },
          date: "2007-08-31",
          country: "DE",
          "release-events": [
            {
              date: "2007-08-31",
              area: {
                id: "85752fda-13c4-31a3-bee5-0e5cb1f51dad",
                name: "Germany",
                "sort-name": "Germany",
                "iso-3166-1-codes": ["DE"],
              },
            },
          ],
          "track-count": 24,
          media: [
            {
              position: 2,
              format: "CD",
              track: [
                {
                  id: "59e370f8-fc27-3390-a60d-08bbc4ef80c0",
                  number: "9",
                  title: "Test by Test",
                  length: 360000,
                },
              ],
              "track-count": 12,
              "track-offset": 8,
            },
          ],
        },
      ],
    },
    {
      id: "e95561a2-537d-4fa2-9da1-034d463dddb7",
      score: 88,
      title: "Hello Test Test",
      video: null,
      "artist-credit": [
        {
          name: "Count Bass D",
          artist: {
            id: "18c9e1ac-840d-4d30-86a0-16b2f608b20f",
            name: "Count Bass D",
            "sort-name": "Count Bass D",
          },
        },
      ],
      releases: [
        {
          id: "094573e0-8ca5-47bc-863d-938ca9a299f6",
          count: 1,
          title: "Sublime 2",
          "artist-credit": [
            {
              name: "Jazz One",
              artist: {
                id: "9c8ef972-065f-4376-be93-668b38b7a047",
                name: "Jazz One",
                "sort-name": "Jazz One",
                disambiguation: "Japanese hip-hop DJ/producer",
              },
            },
          ],
          "release-group": {
            id: "d22cc101-f913-3318-8b9d-460a60f8139c",
            "type-id": "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Sublime 2",
            "primary-type": "Album",
            "secondary-types": ["Compilation"],
            "secondary-type-ids": ["dd2a21e1-0c00-3729-a7a0-de60b84eb5d1"],
          },
          "track-count": 36,
          media: [
            {
              position: 1,
              track: [
                {
                  id: "781e4340-7dfd-3db6-b365-96ad5dac0d4f",
                  number: "12",
                  title: "Hello Test Test",
                },
              ],
              "track-count": 36,
              "track-offset": 11,
            },
          ],
        },
      ],
    },
    {
      id: "30b6e4b1-abc6-48ba-a33b-e3fcd2093580",
      score: 88,
      title: "Hello Test Test",
      length: 49960,
      video: null,
      "artist-credit": [
        {
          joinphrase: " feat. ",
          name: "Count Bass D",
          artist: {
            id: "18c9e1ac-840d-4d30-86a0-16b2f608b20f",
            name: "Count Bass D",
            "sort-name": "Count Bass D",
          },
        },
        {
          joinphrase: " & ",
          name: "Cana",
          artist: {
            id: "467d02bb-35fd-4df2-89e6-732854497079",
            name: "Cana",
            "sort-name": "Cana",
            disambiguation: "Hip-Hop Artist",
          },
        },
        {
          name: "Hezekiah",
          artist: {
            id: "494793f1-6e03-4b4b-baf0-3eeef73bbe1a",
            name: "Hezekiah",
            "sort-name": "Hezekiah",
          },
        },
      ],
      "first-release-date": "2002",
      releases: [
        {
          id: "c7d77150-3827-415b-be82-205dc77fa3a8",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Dwight Spitz (Deluxe Edition)",
          status: "Official",
          "artist-credit": [
            {
              name: "Count Bass D",
              artist: {
                id: "18c9e1ac-840d-4d30-86a0-16b2f608b20f",
                name: "Count Bass D",
                "sort-name": "Count Bass D",
              },
            },
          ],
          "release-group": {
            id: "e5b23a4c-a27c-39ab-a9c8-3058ad741f52",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Dwight Spitz",
            "primary-type": "Album",
          },
          date: "2013-08-25",
          country: "XW",
          "release-events": [
            {
              date: "2013-08-25",
              area: {
                id: "525d4e18-3d00-31b9-a58b-a146a916de8f",
                name: "[Worldwide]",
                "sort-name": "[Worldwide]",
                "iso-3166-1-codes": ["XW"],
              },
            },
          ],
          "track-count": 31,
          media: [
            {
              position: 1,
              format: "Digital Media",
              track: [
                {
                  id: "256ae273-0d10-407c-9706-b26f8cd4337d",
                  number: "13",
                  title: "Hello Test Test",
                  length: 49960,
                },
              ],
              "track-count": 31,
              "track-offset": 12,
            },
          ],
        },
        {
          id: "80707f7b-3e36-41b4-afc3-ea06058e10dc",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Dwight Spitz",
          status: "Official",
          "artist-credit": [
            {
              name: "Count Bass D",
              artist: {
                id: "18c9e1ac-840d-4d30-86a0-16b2f608b20f",
                name: "Count Bass D",
                "sort-name": "Count Bass D",
              },
            },
          ],
          "release-group": {
            id: "e5b23a4c-a27c-39ab-a9c8-3058ad741f52",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Dwight Spitz",
            "primary-type": "Album",
          },
          date: "2002",
          country: "US",
          "release-events": [
            {
              date: "2002",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 25,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "479b490e-d7d9-3e0e-b545-16e2b8892e30",
                  number: "13",
                  title: "Hello Test Test",
                  length: 50000,
                },
              ],
              "track-count": 25,
              "track-offset": 12,
            },
          ],
        },
      ],
    },
    {
      id: "32e1c62a-b535-4dba-9e90-11c4eba46b08",
      score: 88,
      title: "Test Test 1234567890",
      length: 205543,
      video: null,
      "artist-credit": [
        {
          name: "Sir Eddie",
          artist: {
            id: "109945fc-e1ff-4eda-a2bb-5c5cc4e504a8",
            name: "Sir Eddie",
            "sort-name": "Eddie, Sir",
          },
        },
      ],
      "first-release-date": "2015-05-28",
      releases: [
        {
          id: "e8d46ca8-de94-4387-9bcc-4867dcf32267",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Test Test 1234567890",
          status: "Official",
          "release-group": {
            id: "0b38631a-1734-42c5-9c12-8770fa6c5cb6",
            "type-id": "d6038452-8ee0-3f68-affc-2de9a1ede0b9",
            "primary-type-id": "d6038452-8ee0-3f68-affc-2de9a1ede0b9",
            title: "Test Test 1234567890",
            "primary-type": "Single",
          },
          date: "2015-05-28",
          country: "XW",
          "release-events": [
            {
              date: "2015-05-28",
              area: {
                id: "525d4e18-3d00-31b9-a58b-a146a916de8f",
                name: "[Worldwide]",
                "sort-name": "[Worldwide]",
                "iso-3166-1-codes": ["XW"],
              },
            },
          ],
          "track-count": 1,
          media: [
            {
              position: 1,
              format: "Digital Media",
              track: [
                {
                  id: "a0124264-bf6a-4cd3-ade7-f55a66688dcd",
                  number: "1",
                  title: "Test Test 1234567890",
                  length: 205543,
                },
              ],
              "track-count": 1,
              "track-offset": 0,
            },
          ],
        },
      ],
    },
    {
      id: "1a729138-e877-4911-8866-bfa5cf88f418",
      score: 88,
      title: "Test by Test",
      length: 483000,
      video: null,
      "artist-credit": [
        {
          name: "Detacher",
          artist: {
            id: "c118c50b-a071-4b47-9081-8d618544c2d8",
            name: "Detacher",
            "sort-name": "Detacher",
          },
        },
      ],
      "first-release-date": "2006-10-17",
      releases: [
        {
          id: "2d7dfb70-81d7-49ed-9508-e72d0ffa29da",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Test By Test",
          status: "Official",
          "release-group": {
            id: "0076c88b-e3d2-4e41-87c3-0ec9fa4f709a",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Test By Test",
            "primary-type": "Album",
          },
          date: "2006-10-17",
          country: "BE",
          "release-events": [
            {
              date: "2006-10-17",
              area: {
                id: "5b8a5ee5-0bb3-34cf-9a75-c27c44e341fc",
                name: "Belgium",
                "sort-name": "Belgium",
                "iso-3166-1-codes": ["BE"],
              },
            },
          ],
          "track-count": 8,
          media: [
            {
              position: 1,
              format: "Digital Media",
              track: [
                {
                  id: "c1bd9a6e-74d7-4be8-85dc-425dcc7e9081",
                  number: "3",
                  title: "Test by Test",
                  length: 483000,
                },
              ],
              "track-count": 8,
              "track-offset": 2,
            },
          ],
        },
      ],
    },
    {
      id: "553fe470-dcf7-4040-90ff-fbaf17568125",
      score: 88,
      title: "Test Test…Enough",
      length: 128760,
      video: null,
      "artist-credit": [
        {
          name: "Chevelle",
          artist: {
            id: "8456e9f7-debf-4579-a86c-33a325a35d2d",
            name: "Chevelle",
            "sort-name": "Chevelle",
          },
        },
      ],
      "first-release-date": "2021-03-05",
      releases: [
        {
          id: "afe107a6-0cbe-46cc-98fd-c725fe04b723",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "NIRATIAS",
          status: "Official",
          "release-group": {
            id: "99ac2205-efd7-4e00-9717-b17672142d1a",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "NIRATIAS",
            "primary-type": "Album",
          },
          date: "2021-03-05",
          country: "US",
          "release-events": [
            {
              date: "2021-03-05",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 13,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "9c1fd862-1e91-47f4-b62c-7513ff56be75",
                  number: "9",
                  title: "Test Test…Enough",
                  length: 128760,
                },
              ],
              "track-count": 13,
              "track-offset": 8,
            },
          ],
        },
        {
          id: "b2b405c1-5619-42d1-bb5e-175f4f09da14",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "NIRATIAS",
          status: "Official",
          "release-group": {
            id: "99ac2205-efd7-4e00-9717-b17672142d1a",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "NIRATIAS",
            "primary-type": "Album",
          },
          date: "2021-03-05",
          country: "GM",
          "release-events": [
            {
              date: "2021-03-05",
              area: {
                id: "52641fae-20e3-3698-9fa9-1849f2c79ab8",
                name: "Gambia",
                "sort-name": "Gambia",
                "iso-3166-1-codes": ["GM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "d14441fe-3bce-34b5-aed5-dfbe987329c9",
                name: "Gabon",
                "sort-name": "Gabon",
                "iso-3166-1-codes": ["GA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "b0525ccb-15e9-3c56-81fa-471db3b31cfa",
                name: "Iraq",
                "sort-name": "Iraq",
                "iso-3166-1-codes": ["IQ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "d3a68bd0-7419-3f99-a5bd-204d6e057089",
                name: "Indonesia",
                "sort-name": "Indonesia",
                "iso-3166-1-codes": ["ID"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "d31a9a15-537f-3669-ad53-25753ddd2772",
                name: "India",
                "sort-name": "India",
                "iso-3166-1-codes": ["IN"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "48802a32-075a-3805-a183-277c66047693",
                name: "Iceland",
                "sort-name": "Iceland",
                "iso-3166-1-codes": ["IS"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "312bc5bb-7e43-3e63-81c6-b4d712b37b2c",
                name: "Hungary",
                "sort-name": "Hungary",
                "iso-3166-1-codes": ["HU"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "0373cdff-eac8-3fbc-92dc-36a607da06d1",
                name: "Hong Kong",
                "sort-name": "Hong Kong",
                "iso-3166-1-codes": ["HK"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "0c3ea915-4e49-34fc-b702-debb216fd7fa",
                name: "Honduras",
                "sort-name": "Honduras",
                "iso-3166-1-codes": ["HN"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "c4a33ce9-580e-3d57-9c32-f75daf2f75ef",
                name: "Guyana",
                "sort-name": "Guyana",
                "iso-3166-1-codes": ["GY"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "4f01a1af-02ca-3b28-a64f-f38c36c08879",
                name: "Guinea-Bissau",
                "sort-name": "Guinea-Bissau",
                "iso-3166-1-codes": ["GW"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "01448ddc-6ee3-3fa4-b136-507d984e31ee",
                name: "Guatemala",
                "sort-name": "Guatemala",
                "iso-3166-1-codes": ["GT"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "217e2eb3-0a3a-3b59-9eaa-a7465c1417ff",
                name: "Grenada",
                "sort-name": "Grenada",
                "iso-3166-1-codes": ["GD"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "803db0ca-b6ed-3bbc-aeb8-f89efd0a2168",
                name: "Greece",
                "sort-name": "Greece",
                "iso-3166-1-codes": ["GR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "cf48f4b4-28f0-39ab-9104-650324a1d1c8",
                name: "Ghana",
                "sort-name": "Ghana",
                "iso-3166-1-codes": ["GH"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "85752fda-13c4-31a3-bee5-0e5cb1f51dad",
                name: "Germany",
                "sort-name": "Germany",
                "iso-3166-1-codes": ["DE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "7e081aa0-817b-3ae0-9fe2-4bb4e3b3cc95",
                name: "Georgia",
                "sort-name": "Georgia",
                "iso-3166-1-codes": ["GE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "28242750-534a-326b-8ed6-1b03dfb88cd0",
                name: "Algeria",
                "sort-name": "Algeria",
                "iso-3166-1-codes": ["DZ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "2afd5d6a-5fee-3836-8783-44d0ec9ac115",
                name: "Angola",
                "sort-name": "Angola",
                "iso-3166-1-codes": ["AO"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "eed9e8bb-b48f-30af-95f5-f178762ee515",
                name: "Anguilla",
                "sort-name": "Anguilla",
                "iso-3166-1-codes": ["AI"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "2a8cc14f-8d47-389b-b54d-e94312b23d27",
                name: "Antigua and Barbuda",
                "sort-name": "Antigua and Barbuda",
                "iso-3166-1-codes": ["AG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "0df04709-c7d8-3b55-a6ea-f3e5069a947b",
                name: "Argentina",
                "sort-name": "Argentina",
                "iso-3166-1-codes": ["AR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "6474fa20-e0d6-3ef2-95ce-a6f73408cd5e",
                name: "Armenia",
                "sort-name": "Armenia",
                "iso-3166-1-codes": ["AM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "106e0bec-b638-3b37-b731-f53d507dc00e",
                name: "Australia",
                "sort-name": "Australia",
                "iso-3166-1-codes": ["AU"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "caac77d1-a5c8-3e6e-8e27-90b44dcc1446",
                name: "Austria",
                "sort-name": "Austria",
                "iso-3166-1-codes": ["AT"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "b211ad01-2f7d-32e9-80ed-cfd6c9eb6845",
                name: "Azerbaijan",
                "sort-name": "Azerbaijan",
                "iso-3166-1-codes": ["AZ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "f8b33963-7364-33be-8c6c-5ab2e1075ae1",
                name: "Bahamas",
                "sort-name": "Bahamas",
                "iso-3166-1-codes": ["BS"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "65f4f7a6-d3c1-3a6b-a726-85e147d555b7",
                name: "Bahrain",
                "sort-name": "Bahrain",
                "iso-3166-1-codes": ["BH"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "e5d8d205-81d3-3cd3-8956-d5aaa0c0173f",
                name: "Barbados",
                "sort-name": "Barbados",
                "iso-3166-1-codes": ["BB"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "5b8a5ee5-0bb3-34cf-9a75-c27c44e341fc",
                name: "Belgium",
                "sort-name": "Belgium",
                "iso-3166-1-codes": ["BE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "6bf45af6-f1bf-357c-91b5-9593a9c32cb0",
                name: "Belize",
                "sort-name": "Belize",
                "iso-3166-1-codes": ["BZ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "1f72ee74-2d3f-3a40-846b-e3d780b73dd2",
                name: "Benin",
                "sort-name": "Benin",
                "iso-3166-1-codes": ["BJ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "df3bbd94-6a4c-3fc3-bb6e-cd701623db8a",
                name: "Bermuda",
                "sort-name": "Bermuda",
                "iso-3166-1-codes": ["BM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "2cbd5484-647d-3752-8acd-933ced4f9a24",
                name: "Bhutan",
                "sort-name": "Bhutan",
                "iso-3166-1-codes": ["BT"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "a5aed4a3-8ce1-3ab3-bfee-b008cff6b857",
                name: "Bolivia",
                "sort-name": "Bolivia",
                "iso-3166-1-codes": ["BO"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "f2b64f81-6d36-35b3-94b9-5ba53d693914",
                name: "Bosnia and Herzegovina",
                "sort-name": "Bosnia and Herzegovina",
                "iso-3166-1-codes": ["BA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "e5e11b08-d26d-341c-af28-69d3c26607f7",
                name: "Botswana",
                "sort-name": "Botswana",
                "iso-3166-1-codes": ["BW"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "f45b47f8-5796-386e-b172-6c31b009a5d8",
                name: "Brazil",
                "sort-name": "Brazil",
                "iso-3166-1-codes": ["BR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "114c14ad-9776-34e9-81b0-6299507f3771",
                name: "Bulgaria",
                "sort-name": "Bulgaria",
                "iso-3166-1-codes": ["BG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "ee26e886-87f5-33a2-8e8e-f9591490426d",
                name: "Cambodia",
                "sort-name": "Cambodia",
                "iso-3166-1-codes": ["KH"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "bf132644-e3ee-3bfc-9323-7f82824e4945",
                name: "Cameroon",
                "sort-name": "Cameroon",
                "iso-3166-1-codes": ["CM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "71bbafaa-e825-3e15-8ca9-017dcad1748b",
                name: "Canada",
                "sort-name": "Canada",
                "iso-3166-1-codes": ["CA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "41d328a3-01da-35c2-b26e-69c56d7121d1",
                name: "Cape Verde",
                "sort-name": "Cape Verde",
                "iso-3166-1-codes": ["CV"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "5dd25184-711c-3e6a-b089-572cd095f287",
                name: "Cayman Islands",
                "sort-name": "Cayman Islands",
                "iso-3166-1-codes": ["KY"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "6ce82d72-8123-3365-ab34-7b20581a34cf",
                name: "Chad",
                "sort-name": "Chad",
                "iso-3166-1-codes": ["TD"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "82d5f4d6-aed4-3ff5-81d1-5363ac6e97a7",
                name: "Chile",
                "sort-name": "Chile",
                "iso-3166-1-codes": ["CL"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "7c81bb69-a99b-3487-b6d4-0f76d7a29ca0",
                name: "China",
                "sort-name": "China",
                "iso-3166-1-codes": ["CN"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "02b60d8d-7164-339d-868d-22d147d9f74a",
                name: "Colombia",
                "sort-name": "Colombia",
                "iso-3166-1-codes": ["CO"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "185bc3c4-4c5a-3f69-9384-7c280dfdf072",
                name: "Congo",
                "sort-name": "Congo",
                "iso-3166-1-codes": ["CG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "ba544658-8266-36cb-ac0e-3bdfbf52cb00",
                name: "Costa Rica",
                "sort-name": "Costa Rica",
                "iso-3166-1-codes": ["CR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "e56e3d7a-4b90-3546-8450-49548050924a",
                name: "Côte d'Ivoire",
                "sort-name": "Côte d'Ivoire",
                "iso-3166-1-codes": ["CI"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "7d30afff-e425-356a-873e-17ae9745b31d",
                name: "Croatia",
                "sort-name": "Croatia",
                "iso-3166-1-codes": ["HR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "a75b525f-8c01-31f6-975e-4a32a2b001d5",
                name: "Cyprus",
                "sort-name": "Cyprus",
                "iso-3166-1-codes": ["CY"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "51d34c28-61bf-3d21-849f-7492672a9d44",
                name: "Czechia",
                "sort-name": "Czechia",
                "iso-3166-1-codes": ["CZ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "4757b525-2a60-324a-b060-578765d2c993",
                name: "Denmark",
                "sort-name": "Denmark",
                "iso-3166-1-codes": ["DK"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "9898ec17-2174-3a61-9e3b-3f51b3ee4de1",
                name: "Dominica",
                "sort-name": "Dominica",
                "iso-3166-1-codes": ["DM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "696cb3e0-5084-30ab-9916-65ece70adbf6",
                name: "Dominican Republic",
                "sort-name": "Dominican Republic",
                "iso-3166-1-codes": ["DO"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "967abc0e-f680-3cde-95d0-0b79b977d410",
                name: "Ecuador",
                "sort-name": "Ecuador",
                "iso-3166-1-codes": ["EC"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "8e0551f2-95c2-3cc0-a0a9-f2d344f10667",
                name: "Egypt",
                "sort-name": "Egypt",
                "iso-3166-1-codes": ["EG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "f2fa4bfb-97aa-3db4-8d49-cc64969ce1a7",
                name: "El Salvador",
                "sort-name": "El Salvador",
                "iso-3166-1-codes": ["SV"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "e1c1215f-dcc0-35b4-b840-d2ca2151593b",
                name: "Estonia",
                "sort-name": "Estonia",
                "iso-3166-1-codes": ["EE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "031eba2b-79b5-3314-a14b-288407ad42ab",
                name: "Fiji",
                "sort-name": "Fiji",
                "iso-3166-1-codes": ["FJ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "6a264f94-6ff1-30b1-9a81-41f7bfabd616",
                name: "Finland",
                "sort-name": "Finland",
                "iso-3166-1-codes": ["FI"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "08310658-51eb-3801-80de-5a0739207115",
                name: "France",
                "sort-name": "France",
                "iso-3166-1-codes": ["FR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "390b05d4-11ec-3bce-a343-703a366b34a5",
                name: "Ireland",
                "sort-name": "Ireland",
                "iso-3166-1-codes": ["IE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "03691455-bb46-37e3-91d2-cb064a35ffcc",
                name: "Israel",
                "sort-name": "Israel",
                "iso-3166-1-codes": ["IL"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "c6500277-9a3d-349b-bf30-41afdbf42add",
                name: "Italy",
                "sort-name": "Italy",
                "iso-3166-1-codes": ["IT"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "2dd47a64-91d5-3b13-bc94-80043ed063d7",
                name: "Jamaica",
                "sort-name": "Jamaica",
                "iso-3166-1-codes": ["JM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "2db42837-c832-3c27-b4a3-08198f75693c",
                name: "Japan",
                "sort-name": "Japan",
                "iso-3166-1-codes": ["JP"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "2e40127e-0b8a-3a01-bfbc-58c7fcdba532",
                name: "Jordan",
                "sort-name": "Jordan",
                "iso-3166-1-codes": ["JO"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "92d52542-3363-351c-a8b6-d991e0bccb8f",
                name: "Kazakhstan",
                "sort-name": "Kazakhstan",
                "iso-3166-1-codes": ["KZ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "023da4a0-acee-3fb1-b91e-5de74ccf787b",
                name: "Kenya",
                "sort-name": "Kenya",
                "iso-3166-1-codes": ["KE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "b9f7d640-46e8-313e-b158-ded6d18593b3",
                name: "South Korea",
                "sort-name": "South Korea",
                "iso-3166-1-codes": ["KR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "f03f2625-dc7d-38b2-a058-4e9ca0e10424",
                name: "Kuwait",
                "sort-name": "Kuwait",
                "iso-3166-1-codes": ["KW"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "188b4a6b-a4d8-3864-ba46-8446c7b658b4",
                name: "Kyrgyzstan",
                "sort-name": "Kyrgyzstan",
                "iso-3166-1-codes": ["KG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "c81cb1f4-0858-3f28-9082-c06e2ce24bea",
                name: "Laos",
                "sort-name": "Laos",
                "iso-3166-1-codes": ["LA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "66eb3e73-d69e-3581-9a23-a73b4c64c8dd",
                name: "Latvia",
                "sort-name": "Latvia",
                "iso-3166-1-codes": ["LV"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "8138206e-5786-3f86-a53b-19a7303e7419",
                name: "Lebanon",
                "sort-name": "Lebanon",
                "iso-3166-1-codes": ["LB"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "d66e68e6-6410-3d34-a8aa-9242045ed593",
                name: "Liberia",
                "sort-name": "Liberia",
                "iso-3166-1-codes": ["LR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "1509aaae-8271-30cb-89c1-d8660cf73975",
                name: "Libya",
                "sort-name": "Libya",
                "iso-3166-1-codes": ["LY"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "0785dc14-96af-3dc4-bde4-dcdfc2e2d0d6",
                name: "Lithuania",
                "sort-name": "Lithuania",
                "iso-3166-1-codes": ["LT"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "563d21b7-4a8e-35e2-83a7-7804baefbfa7",
                name: "Luxembourg",
                "sort-name": "Luxembourg",
                "iso-3166-1-codes": ["LU"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "ed4e8ad9-2b33-3133-b105-28bb719d6ce8",
                name: "Macao",
                "sort-name": "Macao",
                "iso-3166-1-codes": ["MO"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "fa75cdb9-cbc4-35de-8bf4-a21e7b811484",
                name: "North Macedonia",
                "sort-name": "North Macedonia",
                "iso-3166-1-codes": ["MK"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "f3a30678-3d23-3f42-8056-d32ebe58c66d",
                name: "Madagascar",
                "sort-name": "Madagascar",
                "iso-3166-1-codes": ["MG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "b4d3ff41-ead2-300f-9c11-f73f8ad39678",
                name: "Malawi",
                "sort-name": "Malawi",
                "iso-3166-1-codes": ["MW"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "305d19c7-c040-349c-8d5f-6ac75d2d2a09",
                name: "Malaysia",
                "sort-name": "Malaysia",
                "iso-3166-1-codes": ["MY"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "a195ee41-7f39-3a60-83ca-4a6f91cd4d2e",
                name: "Maldives",
                "sort-name": "Maldives",
                "iso-3166-1-codes": ["MV"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "c35e6d5e-9011-32e5-a23f-9e7639b7350c",
                name: "Mali",
                "sort-name": "Mali",
                "iso-3166-1-codes": ["ML"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "050c94f7-1413-3a34-bb90-4a94f3bb2084",
                name: "Malta",
                "sort-name": "Malta",
                "iso-3166-1-codes": ["MT"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "657e69c5-cda0-3592-9d39-85b55610bc40",
                name: "Mauritania",
                "sort-name": "Mauritania",
                "iso-3166-1-codes": ["MR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "bb019165-42ef-3470-bcb8-36d1b45e4bc1",
                name: "Mauritius",
                "sort-name": "Mauritius",
                "iso-3166-1-codes": ["MU"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "3e08b2cd-69f3-317c-b1e4-e71be581839e",
                name: "Mexico",
                "sort-name": "Mexico",
                "iso-3166-1-codes": ["MX"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "aabae773-4997-37ba-950a-394c06847631",
                name: "Federated States of Micronesia",
                "sort-name": "Federated States of Micronesia",
                "iso-3166-1-codes": ["FM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "560ddb6d-4304-3938-8407-c96605226fad",
                name: "Moldova",
                "sort-name": "Moldova",
                "iso-3166-1-codes": ["MD"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "84360c54-1763-3146-ae38-a439c72fd4ea",
                name: "Mongolia",
                "sort-name": "Mongolia",
                "iso-3166-1-codes": ["MN"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "290ea438-1cb6-35e1-9755-6ab123214293",
                name: "Montserrat",
                "sort-name": "Montserrat",
                "iso-3166-1-codes": ["MS"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "b84d8617-249a-3a06-849d-fc5c25e2249b",
                name: "Morocco",
                "sort-name": "Morocco",
                "iso-3166-1-codes": ["MA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "325ce9a0-d58f-3564-b24e-647b33098767",
                name: "Mozambique",
                "sort-name": "Mozambique",
                "iso-3166-1-codes": ["MZ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "fb1fb575-39ee-34d8-a744-6a880700fd73",
                name: "Myanmar",
                "sort-name": "Myanmar",
                "iso-3166-1-codes": ["MM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "cd4fadac-d701-3401-8516-420de2cb4e5c",
                name: "Namibia",
                "sort-name": "Namibia",
                "iso-3166-1-codes": ["NA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "ef1b7cc0-cd26-36f4-8ea0-04d9623786c7",
                name: "Netherlands",
                "sort-name": "Netherlands",
                "iso-3166-1-codes": ["NL"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "8524c7d9-f472-3890-a458-f28d5081d9c4",
                name: "New Zealand",
                "sort-name": "New Zealand",
                "iso-3166-1-codes": ["NZ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "d2b87acd-06ce-3c71-b3ff-a35d914bbabe",
                name: "Nicaragua",
                "sort-name": "Nicaragua",
                "iso-3166-1-codes": ["NI"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "f27e792b-ddd2-3a70-bdd4-41fb11534b57",
                name: "Niger",
                "sort-name": "Niger",
                "iso-3166-1-codes": ["NE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "1e23d84b-202e-3fc8-8c49-debc71e9eb16",
                name: "Nigeria",
                "sort-name": "Nigeria",
                "iso-3166-1-codes": ["NG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "6743d351-6f37-3049-9724-5041161fff4d",
                name: "Norway",
                "sort-name": "Norway",
                "iso-3166-1-codes": ["NO"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "7ccdff29-2e00-3e50-9520-b9ea1e918bc2",
                name: "Oman",
                "sort-name": "Oman",
                "iso-3166-1-codes": ["OM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "6f85633b-dff4-3fb4-babd-fb89b3628041",
                name: "Panama",
                "sort-name": "Panama",
                "iso-3166-1-codes": ["PA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "2366f623-b236-3073-bbfe-c26d6d6f195f",
                name: "Papua New Guinea",
                "sort-name": "Papua New Guinea",
                "iso-3166-1-codes": ["PG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "0a750c98-a7a5-3d55-bd52-f6e9011b1537",
                name: "Paraguay",
                "sort-name": "Paraguay",
                "iso-3166-1-codes": ["PY"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "719f6082-95c7-3dd5-9503-e143010a6cc1",
                name: "Peru",
                "sort-name": "Peru",
                "iso-3166-1-codes": ["PE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "786532a5-2e36-315a-bdf2-221dc1b64b72",
                name: "Philippines",
                "sort-name": "Philippines",
                "iso-3166-1-codes": ["PH"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "dd7f80c8-f017-3d01-8608-2a8c9c32b954",
                name: "Poland",
                "sort-name": "Poland",
                "iso-3166-1-codes": ["PL"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "781b0c54-3d54-362d-a941-8a617def4992",
                name: "Portugal",
                "sort-name": "Portugal",
                "iso-3166-1-codes": ["PT"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "348dcc25-7bb6-3f75-8739-97eabc84a330",
                name: "Qatar",
                "sort-name": "Qatar",
                "iso-3166-1-codes": ["QA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "61ed84b8-5a10-30a7-8376-ccd51801d6d1",
                name: "Romania",
                "sort-name": "Romania",
                "iso-3166-1-codes": ["RO"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "1f1fc3a4-9500-39b8-9f10-f0a465557eef",
                name: "Russia",
                "sort-name": "Russia",
                "iso-3166-1-codes": ["RU"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "5921efcf-344c-3e55-829d-34fca714fcde",
                name: "Rwanda",
                "sort-name": "Rwanda",
                "iso-3166-1-codes": ["RW"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "b1439904-121a-38fb-8708-0573cb42e2ef",
                name: "Saint Kitts and Nevis",
                "sort-name": "Saint Kitts and Nevis",
                "iso-3166-1-codes": ["KN"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "178709ab-9e22-39ae-a93c-55e66a8183c2",
                name: "Saint Lucia",
                "sort-name": "Saint Lucia",
                "iso-3166-1-codes": ["LC"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "7f9f87ec-3c1e-300d-9bb8-fa93f0754e6b",
                name: "Saint Vincent and The Grenadines",
                "sort-name": "Saint Vincent and The Grenadines",
                "iso-3166-1-codes": ["VC"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "9705be0d-51fb-3990-8726-ec9f56c66ba0",
                name: "Saudi Arabia",
                "sort-name": "Saudi Arabia",
                "iso-3166-1-codes": ["SA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "122bb81f-191e-3798-8be2-4b54ffd7ffa4",
                name: "Senegal",
                "sort-name": "Senegal",
                "iso-3166-1-codes": ["SN"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "be43ea01-053a-3b23-b03d-2df8317a57ff",
                name: "Seychelles",
                "sort-name": "Seychelles",
                "iso-3166-1-codes": ["SC"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "2b547f54-a97c-3481-9625-7ad9a670b1e6",
                name: "Sierra Leone",
                "sort-name": "Sierra Leone",
                "iso-3166-1-codes": ["SL"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "aa344640-fd57-3960-afb4-84d0d3b69d3d",
                name: "Singapore",
                "sort-name": "Singapore",
                "iso-3166-1-codes": ["SG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "eb52ca74-dd11-37a1-a3fa-154430bf2df2",
                name: "Slovakia",
                "sort-name": "Slovakia",
                "iso-3166-1-codes": ["SK"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "5b0b6225-584c-3942-b69d-5efceb9989af",
                name: "Slovenia",
                "sort-name": "Slovenia",
                "iso-3166-1-codes": ["SI"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "7fe4001e-eda5-3b5b-bbd8-0f773e76d09c",
                name: "Solomon Islands",
                "sort-name": "Solomon Islands",
                "iso-3166-1-codes": ["SB"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "50cc7852-862e-30ae-aa82-385fe7135b7f",
                name: "South Africa",
                "sort-name": "South Africa",
                "iso-3166-1-codes": ["ZA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "471c46a7-afc5-31c4-923c-d0444f5053a4",
                name: "Spain",
                "sort-name": "Spain",
                "iso-3166-1-codes": ["ES"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "6e2d562d-a754-3036-8484-7ac576606e27",
                name: "Sri Lanka",
                "sort-name": "Sri Lanka",
                "iso-3166-1-codes": ["LK"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "9d1049fb-7b2d-3862-a26d-3cc58c8c7b5b",
                name: "Suriname",
                "sort-name": "Suriname",
                "iso-3166-1-codes": ["SR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "564741c6-943e-313b-86fa-9819d595281b",
                name: "Eswatini",
                "sort-name": "Eswatini",
                "iso-3166-1-codes": ["SZ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "23d10872-f5ae-3f0c-bf55-332788a16ecb",
                name: "Sweden",
                "sort-name": "Sweden",
                "iso-3166-1-codes": ["SE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "1333ff06-8e3d-3c8e-9f3a-13a2a38b41df",
                name: "Switzerland",
                "sort-name": "Switzerland",
                "iso-3166-1-codes": ["CH"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "41637cec-9a4f-389c-86d2-fc6abf3357b5",
                name: "Taiwan",
                "sort-name": "Taiwan",
                "iso-3166-1-codes": ["TW"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "8259e91f-10fa-3c38-92fb-8e6822c279d5",
                name: "Tajikistan",
                "sort-name": "Tajikistan",
                "iso-3166-1-codes": ["TJ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "c2676abd-2ac7-351a-94a9-a802b3434737",
                name: "Tanzania",
                "sort-name": "Tanzania",
                "iso-3166-1-codes": ["TZ"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "ce209e56-cda5-358e-96db-830e3405b675",
                name: "Thailand",
                "sort-name": "Thailand",
                "iso-3166-1-codes": ["TH"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "a2b8e506-3570-3a56-826e-939049c59428",
                name: "Tonga",
                "sort-name": "Tonga",
                "iso-3166-1-codes": ["TO"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "6c290168-f3b9-3adb-9889-b856feb2c26c",
                name: "Trinidad and Tobago",
                "sort-name": "Trinidad and Tobago",
                "iso-3166-1-codes": ["TT"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "58955071-67c1-3491-8dec-48d28f824bda",
                name: "Tunisia",
                "sort-name": "Tunisia",
                "iso-3166-1-codes": ["TN"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "d3be28b4-41f7-3752-8a05-ed45e1d1e492",
                name: "Turkey",
                "sort-name": "Turkey",
                "iso-3166-1-codes": ["TR"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "98e38a45-b90e-3575-943e-23e26ce3a69f",
                name: "Turkmenistan",
                "sort-name": "Turkmenistan",
                "iso-3166-1-codes": ["TM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "a2d01b31-5184-382e-aab5-63b5944195b7",
                name: "Turks and Caicos Islands",
                "sort-name": "Turks and Caicos Islands",
                "iso-3166-1-codes": ["TC"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "1ac655f1-12d1-351a-a2b2-8404167e0e0b",
                name: "Uganda",
                "sort-name": "Uganda",
                "iso-3166-1-codes": ["UG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "904768d0-61ca-3c40-93ac-93adc36fef4b",
                name: "Ukraine",
                "sort-name": "Ukraine",
                "iso-3166-1-codes": ["UA"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "fe40c648-ba74-3e17-b768-58181d5ee563",
                name: "United Arab Emirates",
                "sort-name": "United Arab Emirates",
                "iso-3166-1-codes": ["AE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
                name: "United Kingdom",
                "sort-name": "United Kingdom",
                "iso-3166-1-codes": ["GB"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "ea88d395-87c9-3c47-b49a-114cad41fd39",
                name: "Uruguay",
                "sort-name": "Uruguay",
                "iso-3166-1-codes": ["UY"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "c2021af8-7645-3f38-aa1b-ada0a13d4faf",
                name: "Vanuatu",
                "sort-name": "Vanuatu",
                "iso-3166-1-codes": ["VU"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "2ac90d6b-04fa-3006-8a91-89da01032365",
                name: "Venezuela",
                "sort-name": "Venezuela",
                "iso-3166-1-codes": ["VE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "0158e991-c3c6-374a-9b9d-024bbaff6980",
                name: "Vietnam",
                "sort-name": "Vietnam",
                "iso-3166-1-codes": ["VN"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "8562c2e5-eabb-3fad-96f2-f536a93a2957",
                name: "British Virgin Islands",
                "sort-name": "British Virgin Islands",
                "iso-3166-1-codes": ["VG"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "e8e9ecdc-19d3-360b-8f1a-9c80e6c12830",
                name: "Yemen",
                "sort-name": "Yemen",
                "iso-3166-1-codes": ["YE"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "d1733e16-9064-3181-961d-d56f8599969b",
                name: "Democratic Republic of the Congo",
                "sort-name": "Democratic Republic of the Congo",
                "iso-3166-1-codes": ["CD"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "d662dd74-1fc1-3e36-b427-bbbe29684618",
                name: "Zambia",
                "sort-name": "Zambia",
                "iso-3166-1-codes": ["ZM"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "691e8ad6-2cc8-3678-8495-1ac96bbede55",
                name: "Zimbabwe",
                "sort-name": "Zimbabwe",
                "iso-3166-1-codes": ["ZW"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "6f8faf25-44cb-313b-9162-77145cdc192d",
                name: "Montenegro",
                "sort-name": "Montenegro",
                "iso-3166-1-codes": ["ME"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "424c1b50-57f8-34af-ab97-313e2ad40058",
                name: "Serbia",
                "sort-name": "Serbia",
                "iso-3166-1-codes": ["RS"],
              },
            },
            {
              date: "2021-03-05",
              area: {
                id: "7b6ae6b7-6f4f-43df-aab8-0c72531ea8ae",
                name: "Kosovo",
                "sort-name": "Kosovo",
                "iso-3166-1-codes": ["XK"],
              },
            },
          ],
          "track-count": 13,
          media: [
            {
              position: 1,
              format: "Digital Media",
              track: [
                {
                  id: "f12f8529-3bc2-43f9-acfa-f357c91bfe63",
                  number: "9",
                  title: "Test Test…Enough",
                  length: 128760,
                },
              ],
              "track-count": 13,
              "track-offset": 8,
            },
          ],
        },
      ],
      isrcs: ["USSM12004801"],
    },
    {
      id: "1d43fb47-3126-482c-8a46-7976ec89945a",
      score: 88,
      title: "Test. Don’t Test",
      length: 64306,
      video: null,
      "artist-credit": [
        {
          name: "Attica Blues",
          artist: {
            id: "be9e0fe6-c175-4f1f-b20e-a95096dffdf6",
            name: "Attica Blues",
            "sort-name": "Attica Blues",
          },
        },
      ],
      "first-release-date": "2002-01-22",
      releases: [
        {
          id: "96391c84-08a0-4d46-a56e-0edc2bbd7d56",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Test. Don’t Test",
          status: "Official",
          "release-group": {
            id: "657bb8b8-b82b-3d47-b0ea-851d92d8f681",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Test. Don’t Test",
            "primary-type": "Album",
          },
          date: "2002-01-22",
          country: "US",
          "release-events": [
            {
              date: "2002-01-22",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 14,
          media: [
            {
              position: 1,
              track: [
                {
                  id: "caad37dd-6f28-33d5-9532-0d02f3caa96a",
                  number: "1",
                  title: "Test. Don’t Test",
                  length: 64306,
                },
              ],
              "track-count": 14,
              "track-offset": 0,
            },
          ],
        },
      ],
    },
    {
      id: "c829b643-a312-44f8-a129-308604b333f4",
      score: 87,
      title: "Test",
      length: 364293,
      video: null,
      "artist-credit": [
        {
          name: "Ministry",
          artist: {
            id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
            name: "Ministry",
            "sort-name": "Ministry",
            disambiguation: "US industrial metal band",
            aliases: [
              {
                "sort-name": "Minestry",
                name: "Minestry",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "Ministy",
                name: "Ministy",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "Ministry and Co-Conspirators",
                name: "Ministry and Co-Conspirators",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "1989-11-10",
      releases: [
        {
          id: "5a09051c-0e61-3ea3-8f8e-97f6dd1fa09d",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "The Mind Is a Terrible Thing to Taste",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "f9ae3b6b-ee68-358f-9e75-d13b59cdbb11",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "The Mind Is a Terrible Thing to Taste",
            "primary-type": "Album",
          },
          date: "1989-11-14",
          country: "US",
          "release-events": [
            {
              date: "1989-11-14",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 9,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "31edcb62-e117-3922-9cae-f66fa47871a9",
                  number: "7",
                  title: "Test",
                  length: 364306,
                },
              ],
              "track-count": 9,
              "track-offset": 6,
            },
          ],
        },
        {
          id: "2624208c-b50a-38db-8ea5-d12fe70506dc",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "The Mind Is a Terrible Thing to Taste",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "f9ae3b6b-ee68-358f-9e75-d13b59cdbb11",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "The Mind Is a Terrible Thing to Taste",
            "primary-type": "Album",
          },
          date: "1989-11-10",
          country: "DE",
          "release-events": [
            {
              date: "1989-11-10",
              area: {
                id: "85752fda-13c4-31a3-bee5-0e5cb1f51dad",
                name: "Germany",
                "sort-name": "Germany",
                "iso-3166-1-codes": ["DE"],
              },
            },
          ],
          "track-count": 9,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "f2c2219f-72f8-30d1-a2d1-612702d1e1e7",
                  number: "7",
                  title: "Test",
                  length: 364306,
                },
              ],
              "track-count": 9,
              "track-offset": 6,
            },
          ],
        },
        {
          id: "251b8196-ff61-482c-8c0e-3f10c0d8fc33",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 5,
          title: "Original Album Series",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "a86d3242-8d45-45ba-8756-6d1200a49565",
            "type-id": "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Original Album Series",
            "primary-type": "Album",
            "secondary-types": ["Compilation"],
            "secondary-type-ids": ["dd2a21e1-0c00-3729-a7a0-de60b84eb5d1"],
          },
          date: "2011-10-10",
          country: "GB",
          "release-events": [
            {
              date: "2011-10-10",
              area: {
                id: "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
                name: "United Kingdom",
                "sort-name": "United Kingdom",
                "iso-3166-1-codes": ["GB"],
              },
            },
            {
              date: "2011-10-10",
              area: {
                id: "89a675c2-3e37-3518-b83c-418bad59a85a",
                name: "Europe",
                "sort-name": "Europe",
                "iso-3166-1-codes": ["XE"],
              },
            },
          ],
          "track-count": 44,
          media: [
            {
              position: 3,
              format: "CD",
              track: [
                {
                  id: "25fb1a97-cd7d-4866-8558-81382d7a10b4",
                  number: "7",
                  title: "Test",
                  length: 364000,
                },
              ],
              "track-count": 9,
              "track-offset": 6,
            },
          ],
        },
        {
          id: "e4a82092-457e-41e9-a1bd-0830d3abc086",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "The Mind Is a Terrible Thing to Taste",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "f9ae3b6b-ee68-358f-9e75-d13b59cdbb11",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "The Mind Is a Terrible Thing to Taste",
            "primary-type": "Album",
          },
          date: "",
          country: "CA",
          "release-events": [
            {
              date: "",
              area: {
                id: "71bbafaa-e825-3e15-8ca9-017dcad1748b",
                name: "Canada",
                "sort-name": "Canada",
                "iso-3166-1-codes": ["CA"],
              },
            },
          ],
          "track-count": 9,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "725c793a-e494-4255-848a-cd74f82fadf6",
                  number: "7",
                  title: "Test",
                  length: 364293,
                },
              ],
              "track-count": 9,
              "track-offset": 6,
            },
          ],
        },
        {
          id: "df7ad331-380a-3f7d-8e35-85de6ebee826",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "The Mind Is a Terrible Thing to Taste",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "f9ae3b6b-ee68-358f-9e75-d13b59cdbb11",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "The Mind Is a Terrible Thing to Taste",
            "primary-type": "Album",
          },
          date: "1989",
          country: "US",
          "release-events": [
            {
              date: "1989",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 9,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "9efde501-f8ab-3d87-abed-1d736585bf28",
                  number: "7",
                  title: "Test",
                  length: 364306,
                },
              ],
              "track-count": 9,
              "track-offset": 6,
            },
          ],
        },
        {
          id: "944e06cd-e697-3056-889a-a0df5c3f9fee",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "The Mind Is a Terrible Thing to Taste",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "f9ae3b6b-ee68-358f-9e75-d13b59cdbb11",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "The Mind Is a Terrible Thing to Taste",
            "primary-type": "Album",
          },
          date: "1989-11-16",
          country: "CA",
          "release-events": [
            {
              date: "1989-11-16",
              area: {
                id: "71bbafaa-e825-3e15-8ca9-017dcad1748b",
                name: "Canada",
                "sort-name": "Canada",
                "iso-3166-1-codes": ["CA"],
              },
            },
          ],
          "track-count": 9,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "31fecbfa-75be-3006-a27d-4cf08bed0c3c",
                  number: "7",
                  title: "Test",
                  length: 364306,
                },
              ],
              "track-count": 9,
              "track-offset": 6,
            },
          ],
        },
        {
          id: "38e4d89a-8ba7-3e7b-bd92-0288543b71c1",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "The Mind Is a Terrible Thing to Taste",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "f9ae3b6b-ee68-358f-9e75-d13b59cdbb11",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "The Mind Is a Terrible Thing to Taste",
            "primary-type": "Album",
          },
          date: "1989",
          country: "GB",
          "release-events": [
            {
              date: "1989",
              area: {
                id: "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
                name: "United Kingdom",
                "sort-name": "United Kingdom",
                "iso-3166-1-codes": ["GB"],
              },
            },
          ],
          "track-count": 9,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "46133c0e-d7b7-3741-b7cb-d812be0af4ec",
                  number: "7",
                  title: "Test",
                  length: 364306,
                },
              ],
              "track-count": 9,
              "track-offset": 6,
            },
          ],
        },
        {
          id: "274a7453-12bb-4bf7-b39b-6291f82bab7b",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "The Mind Is a Terrible Thing to Taste",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "f9ae3b6b-ee68-358f-9e75-d13b59cdbb11",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "The Mind Is a Terrible Thing to Taste",
            "primary-type": "Album",
          },
          date: "1989",
          country: "BR",
          "release-events": [
            {
              date: "1989",
              area: {
                id: "f45b47f8-5796-386e-b172-6c31b009a5d8",
                name: "Brazil",
                "sort-name": "Brazil",
                "iso-3166-1-codes": ["BR"],
              },
            },
          ],
          "track-count": 8,
          media: [
            {
              position: 1,
              format: '12" Vinyl',
              track: [
                {
                  id: "6b967e41-4e19-3808-9670-d684e8c43fc9",
                  number: "B3",
                  title: "Test",
                  length: 362000,
                },
              ],
              "track-count": 8,
              "track-offset": 6,
            },
          ],
        },
        {
          id: "8435354a-da22-4af1-bfcf-724bde78e0bc",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "The Mind Is a Terrible Thing to Taste",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "f9ae3b6b-ee68-358f-9e75-d13b59cdbb11",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "The Mind Is a Terrible Thing to Taste",
            "primary-type": "Album",
          },
          date: "1989-11-14",
          country: "US",
          "release-events": [
            {
              date: "1989-11-14",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 8,
          media: [
            {
              position: 1,
              format: '12" Vinyl',
              track: [
                {
                  id: "d6f8fc01-c73e-375e-af2c-b68036011a6b",
                  number: "B3",
                  title: "Test",
                },
              ],
              "track-count": 8,
              "track-offset": 6,
            },
          ],
        },
        {
          id: "86c722b6-e069-4040-b0ee-14da64ae2c19",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "The Mind Is a Terrible Thing to Taste",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "f9ae3b6b-ee68-358f-9e75-d13b59cdbb11",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "The Mind Is a Terrible Thing to Taste",
            "primary-type": "Album",
          },
          date: "1989",
          country: "US",
          "release-events": [
            {
              date: "1989",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 8,
          media: [
            {
              position: 1,
              format: "Cassette",
              track: [
                {
                  id: "03fe96ee-5daf-4f05-876d-a317ff4b01a8",
                  number: "B3",
                  title: "Test",
                  length: 362000,
                },
              ],
              "track-count": 8,
              "track-offset": 6,
            },
          ],
        },
        {
          id: "8df3a519-cf14-4d34-bfe8-7b973b3e1fd9",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "The Mind Is a Terrible Thing to Taste",
          status: "Official",
          "artist-credit": [
            {
              name: "Ministry",
              artist: {
                id: "13df2a46-f72f-40e7-aa63-26fcf62c7048",
                name: "Ministry",
                "sort-name": "Ministry",
                disambiguation: "US industrial metal band",
              },
            },
          ],
          "release-group": {
            id: "f9ae3b6b-ee68-358f-9e75-d13b59cdbb11",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "The Mind Is a Terrible Thing to Taste",
            "primary-type": "Album",
          },
          date: "2014-01-27",
          country: "NL",
          "release-events": [
            {
              date: "2014-01-27",
              area: {
                id: "ef1b7cc0-cd26-36f4-8ea0-04d9623786c7",
                name: "Netherlands",
                "sort-name": "Netherlands",
                "iso-3166-1-codes": ["NL"],
              },
            },
          ],
          "track-count": 9,
          media: [
            {
              position: 1,
              format: '12" Vinyl',
              track: [
                {
                  id: "f183e843-4a73-4c6f-8954-4be01f4a20bc",
                  number: "B3",
                  title: "Test",
                  length: 364293,
                },
              ],
              "track-count": 9,
              "track-offset": 6,
            },
          ],
        },
      ],
      isrcs: ["USWB19901131"],
      tags: [
        { count: 1, name: "rock" },
        { count: 3, name: "electronic" },
        { count: 5, name: "industrial" },
        { count: 1, name: "heavy metal" },
        { count: 1, name: "industrial rock" },
        { count: 4, name: "industrial metal" },
        { count: 1, name: "thrash metal" },
        { count: 1, name: "nu metal" },
        { count: 1, name: "alternative metal" },
        { count: 1, name: "industrial dance" },
        { count: 1, name: "pop/rock" },
        { count: 1, name: "alternative/indie rock" },
        { count: 1, name: "alternative pop/rock" },
      ],
    },
    {
      id: "17d9cd16-14cc-4fd8-af6d-518e2735ad28",
      score: 87,
      title: "Test",
      length: 273000,
      video: null,
      "artist-credit": [
        {
          name: "Hard‐Ons",
          artist: {
            id: "f9fe87a7-f493-4d5d-9fb1-e65d171e9333",
            name: "Hard‐Ons",
            "sort-name": "Hard‐Ons",
            aliases: [
              {
                "sort-name": "The Hard Ons",
                name: "The Hard Ons",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "The Hardons",
                "type-id": "1937e404-b981-3cb7-8151-4c86ebfc8d8e",
                name: "The Hardons",
                locale: null,
                type: "Search hint",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "The Hard-Ons",
                name: "The Hard-Ons",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "1994",
      releases: [
        {
          id: "f2d8860c-05af-487b-8f32-01e5eb2645db",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Too Far Gone",
          status: "Official",
          "artist-credit": [
            {
              name: "Hard‐Ons",
              artist: {
                id: "f9fe87a7-f493-4d5d-9fb1-e65d171e9333",
                name: "Hard‐Ons",
                "sort-name": "Hard‐Ons",
              },
            },
          ],
          "release-group": {
            id: "7aca36b8-5496-3822-8353-a5170a161492",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Too Far Gone",
            "primary-type": "Album",
          },
          date: "1994",
          country: "AU",
          "release-events": [
            {
              date: "1994",
              area: {
                id: "106e0bec-b638-3b37-b731-f53d507dc00e",
                name: "Australia",
                "sort-name": "Australia",
                "iso-3166-1-codes": ["AU"],
              },
            },
          ],
          "track-count": 14,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "f50fd197-9204-3f8f-bab3-427c7e78115b",
                  number: "5",
                  title: "Test",
                  length: 273000,
                },
              ],
              "track-count": 14,
              "track-offset": 4,
            },
          ],
        },
      ],
    },
    {
      id: "37cd6b6e-4295-4325-ac61-609f76c8da94",
      score: 87,
      title: "Test",
      length: 461760,
      video: null,
      "artist-credit": [
        {
          name: "Hard‐Ons",
          artist: {
            id: "f9fe87a7-f493-4d5d-9fb1-e65d171e9333",
            name: "Hard‐Ons",
            "sort-name": "Hard‐Ons",
            aliases: [
              {
                "sort-name": "The Hard Ons",
                name: "The Hard Ons",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "The Hardons",
                "type-id": "1937e404-b981-3cb7-8151-4c86ebfc8d8e",
                name: "The Hardons",
                locale: null,
                type: "Search hint",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "The Hard-Ons",
                name: "The Hard-Ons",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "1994-11",
      releases: [
        {
          id: "a4343bfa-db38-4d65-a1f4-d18374f312e7",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 2,
          title: "A Decade of Rock",
          status: "Official",
          "artist-credit": [
            {
              name: "Hard‐Ons",
              artist: {
                id: "f9fe87a7-f493-4d5d-9fb1-e65d171e9333",
                name: "Hard‐Ons",
                "sort-name": "Hard‐Ons",
              },
            },
          ],
          "release-group": {
            id: "f78a7671-bcd3-3878-ab58-dc66eae258a7",
            "type-id": "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "A Decade of Rock",
            "primary-type": "Album",
            "secondary-types": ["Compilation"],
            "secondary-type-ids": ["dd2a21e1-0c00-3729-a7a0-de60b84eb5d1"],
          },
          date: "1994-11",
          country: "AU",
          "release-events": [
            {
              date: "1994-11",
              area: {
                id: "106e0bec-b638-3b37-b731-f53d507dc00e",
                name: "Australia",
                "sort-name": "Australia",
                "iso-3166-1-codes": ["AU"],
              },
            },
          ],
          "track-count": 48,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "24150d93-f9e3-3276-a376-74474159896c",
                  number: "26",
                  title: "Test",
                  length: 461760,
                },
              ],
              "track-count": 26,
              "track-offset": 25,
            },
          ],
        },
        {
          id: "be94315e-d718-4bf9-88e4-5f4d5a3f7d19",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Singles!",
          status: "Official",
          "artist-credit": [
            {
              name: "Hard‐Ons",
              artist: {
                id: "f9fe87a7-f493-4d5d-9fb1-e65d171e9333",
                name: "Hard‐Ons",
                "sort-name": "Hard‐Ons",
              },
            },
          ],
          "release-group": {
            id: "447a4fab-b115-3645-9188-a9a118be09c7",
            "type-id": "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Singles!",
            "primary-type": "Album",
            "secondary-types": ["Compilation"],
            "secondary-type-ids": ["dd2a21e1-0c00-3729-a7a0-de60b84eb5d1"],
          },
          date: "1994",
          country: "AU",
          "release-events": [
            {
              date: "1994",
              area: {
                id: "106e0bec-b638-3b37-b731-f53d507dc00e",
                name: "Australia",
                "sort-name": "Australia",
                "iso-3166-1-codes": ["AU"],
              },
            },
          ],
          "track-count": 26,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "81ad5972-8be0-3fdd-a524-f2b22e08f8e3",
                  number: "26",
                  title: "Test",
                  length: 463134,
                },
              ],
              "track-count": 26,
              "track-offset": 25,
            },
          ],
        },
      ],
    },
    {
      id: "168af50f-35a0-425e-8469-71e979590a7b",
      score: 87,
      title: "Test",
      length: 52293,
      video: null,
      "artist-credit": [
        {
          joinphrase: " & ",
          name: "Leslie Fish",
          artist: {
            id: "487964e9-17d4-4c02-938b-65d21eed3d14",
            name: "Leslie Fish",
            "sort-name": "Fish, Leslie",
          },
        },
        {
          name: "The Dehorn Crew",
          artist: {
            id: "f16e1f19-5306-4a78-ba8e-e23bd860f400",
            name: "The Dehorn Crew",
            "sort-name": "Dehorn Crew, The",
          },
        },
      ],
      "first-release-date": "2002",
      releases: [
        {
          id: "b4a7f534-4d9b-465e-9da3-c9ee8990018c",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Folk Songs for Solar Sailors",
          status: "Official",
          "release-group": {
            id: "b1127ec6-c157-3cde-ba29-84c5ef1b0251",
            "type-id": "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Folk Songs for Solar Sailors",
            "primary-type": "Album",
            "secondary-types": ["Compilation"],
            "secondary-type-ids": ["dd2a21e1-0c00-3729-a7a0-de60b84eb5d1"],
          },
          date: "2002",
          country: "US",
          "release-events": [
            {
              date: "2002",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 22,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "6853df13-6bdc-3783-823d-772c58784894",
                  number: "1",
                  title: "Test",
                  length: 52293,
                },
              ],
              "track-count": 22,
              "track-offset": 0,
            },
          ],
        },
      ],
      tags: [{ count: 1, name: "filk" }],
    },
    {
      id: "42c87e51-d7ec-469b-b7e7-4249185cdb13",
      score: 87,
      title: "Test",
      length: 591493,
      video: null,
      "artist-credit": [
        {
          name: "Bardo Pond",
          artist: {
            id: "2ad8bce1-8e55-48db-82ed-d98b52a3a13f",
            name: "Bardo Pond",
            "sort-name": "Bardo Pond",
            disambiguation: "psychedelic rock group",
          },
        },
      ],
      "first-release-date": "2003-07-08",
      releases: [
        {
          id: "3cbb08e1-c3a8-4735-9310-637d86dbfc04",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "On the Ellipse",
          status: "Official",
          "release-group": {
            id: "42ec75ff-c43e-3c0d-abc0-a7c274d53240",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "On the Ellipse",
            "primary-type": "Album",
          },
          date: "2020",
          country: "XW",
          "release-events": [
            {
              date: "2020",
              area: {
                id: "525d4e18-3d00-31b9-a58b-a146a916de8f",
                name: "[Worldwide]",
                "sort-name": "[Worldwide]",
                "iso-3166-1-codes": ["XW"],
              },
            },
          ],
          "track-count": 6,
          media: [
            {
              position: 1,
              format: "Digital Media",
              track: [
                {
                  id: "0e29afa3-a94a-4b3c-a571-99eafd8cf3e0",
                  number: "4",
                  title: "Test",
                  length: 591493,
                },
              ],
              "track-count": 6,
              "track-offset": 3,
            },
          ],
        },
        {
          id: "8bd14baf-70d0-4cc8-916a-42a71640e06f",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 2,
          title: "On the Ellipse",
          status: "Official",
          "release-group": {
            id: "42ec75ff-c43e-3c0d-abc0-a7c274d53240",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "On the Ellipse",
            "primary-type": "Album",
          },
          date: "2020-10-24",
          country: "GB",
          "release-events": [
            {
              date: "2020-10-24",
              area: {
                id: "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
                name: "United Kingdom",
                "sort-name": "United Kingdom",
                "iso-3166-1-codes": ["GB"],
              },
            },
          ],
          "track-count": 6,
          media: [
            {
              position: 1,
              format: '12" Vinyl',
              track: [
                {
                  id: "37d228d7-ff7a-4de3-8ad1-cec7f792cb2f",
                  number: "B2",
                  title: "Test",
                  length: 591000,
                },
              ],
              "track-count": 4,
              "track-offset": 3,
            },
          ],
        },
        {
          id: "a0d01d8b-e3c7-4abc-9baa-e8ae1ebd9e85",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "On the Ellipse",
          status: "Official",
          "release-group": {
            id: "42ec75ff-c43e-3c0d-abc0-a7c274d53240",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "On the Ellipse",
            "primary-type": "Album",
          },
          date: "2003-07-08",
          country: "US",
          "release-events": [
            {
              date: "2003-07-08",
              area: {
                id: "489ce91b-6658-3307-9877-795b68554c98",
                name: "United States",
                "sort-name": "United States",
                "iso-3166-1-codes": ["US"],
              },
            },
          ],
          "track-count": 6,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "73f2f07b-d779-3ae6-a7f6-96751cecd392",
                  number: "4",
                  title: "Test",
                  length: 591493,
                },
              ],
              "track-count": 6,
              "track-offset": 3,
            },
          ],
        },
        {
          id: "e73f3c98-b0d4-43bd-af68-91571745d56b",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 2,
          title: "On the Ellipse",
          status: "Official",
          "release-group": {
            id: "42ec75ff-c43e-3c0d-abc0-a7c274d53240",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "On the Ellipse",
            "primary-type": "Album",
          },
          date: "2003",
          country: "GB",
          "release-events": [
            {
              date: "2003",
              area: {
                id: "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
                name: "United Kingdom",
                "sort-name": "United Kingdom",
                "iso-3166-1-codes": ["GB"],
              },
            },
          ],
          "track-count": 6,
          media: [
            {
              position: 2,
              format: '12" Vinyl',
              track: [
                {
                  id: "edd4fcb5-a749-3e1b-a32f-40995edea4a1",
                  number: "C1",
                  title: "Test",
                  length: 591493,
                },
              ],
              "track-count": 2,
              "track-offset": 0,
            },
          ],
        },
        {
          id: "e518de2e-ea2e-48c1-a93d-526aa8b512f1",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "On the Ellipse",
          status: "Official",
          "release-group": {
            id: "42ec75ff-c43e-3c0d-abc0-a7c274d53240",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "On the Ellipse",
            "primary-type": "Album",
          },
          date: "2003-07-08",
          country: "GB",
          "release-events": [
            {
              date: "2003-07-08",
              area: {
                id: "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
                name: "United Kingdom",
                "sort-name": "United Kingdom",
                "iso-3166-1-codes": ["GB"],
              },
            },
          ],
          "track-count": 6,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "e6f653ca-5149-4e05-a534-ba9f6795d59f",
                  number: "4",
                  title: "Test",
                  length: 591493,
                },
              ],
              "track-count": 6,
              "track-offset": 3,
            },
          ],
        },
      ],
      isrcs: ["GBMUA0300004"],
    },
    {
      id: "c8fd1606-3dc1-49f1-9346-8e362b101bd0",
      score: 87,
      title: "Test",
      length: 271626,
      video: null,
      "artist-credit": [
        {
          name: "Ákos",
          artist: {
            id: "b8696047-080a-4e24-9901-238aa87717d0",
            name: "Ákos",
            "sort-name": "Ákos",
            aliases: [
              {
                "sort-name": "Akosh",
                name: "Akosh",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "Ákos, Kovács",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                name: "Kovács Ákos",
                locale: null,
                type: "Legal name",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "1994",
      releases: [
        {
          id: "0a3deced-fa75-40dd-ad2a-bb2d18d503a3",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Test",
          status: "Official",
          "artist-credit": [
            {
              name: "Ákos",
              artist: {
                id: "b8696047-080a-4e24-9901-238aa87717d0",
                name: "Ákos",
                "sort-name": "Ákos",
              },
            },
          ],
          "release-group": {
            id: "4b41404e-e4f3-3e51-9f23-e7d7d47296a0",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Test",
            "primary-type": "Album",
          },
          date: "1994",
          country: "HU",
          "release-events": [
            {
              date: "1994",
              area: {
                id: "312bc5bb-7e43-3e63-81c6-b4d712b37b2c",
                name: "Hungary",
                "sort-name": "Hungary",
                "iso-3166-1-codes": ["HU"],
              },
            },
          ],
          "track-count": 14,
          media: [
            {
              position: 1,
              track: [
                {
                  id: "e0f8bbcd-bd5a-33a3-a986-7b12dfb6afd2",
                  number: "2",
                  title: "Test",
                  length: 271626,
                },
              ],
              "track-count": 14,
              "track-offset": 1,
            },
          ],
        },
      ],
    },
    {
      id: "547ebe50-b3b3-4005-826c-e33d8596fc01",
      score: 87,
      title: "Test",
      length: 297866,
      video: null,
      "artist-credit": [
        {
          name: "Ákos",
          artist: {
            id: "b8696047-080a-4e24-9901-238aa87717d0",
            name: "Ákos",
            "sort-name": "Ákos",
            aliases: [
              {
                "sort-name": "Akosh",
                name: "Akosh",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "Ákos, Kovács",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                name: "Kovács Ákos",
                locale: null,
                type: "Legal name",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "1996",
      releases: [
        {
          id: "9ca3e098-a8f3-4272-a6d2-aaaf014ecdf4",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Élő dalok",
          status: "Official",
          "artist-credit": [
            {
              name: "Ákos",
              artist: {
                id: "b8696047-080a-4e24-9901-238aa87717d0",
                name: "Ákos",
                "sort-name": "Ákos",
              },
            },
          ],
          "release-group": {
            id: "c278dbcf-4925-3760-a950-2508fc698d7a",
            "type-id": "6fd474e2-6b58-3102-9d17-d6f7eb7da0a0",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Élő dalok",
            "primary-type": "Album",
            "secondary-types": ["Live"],
            "secondary-type-ids": ["6fd474e2-6b58-3102-9d17-d6f7eb7da0a0"],
          },
          date: "1996",
          country: "HU",
          "release-events": [
            {
              date: "1996",
              area: {
                id: "312bc5bb-7e43-3e63-81c6-b4d712b37b2c",
                name: "Hungary",
                "sort-name": "Hungary",
                "iso-3166-1-codes": ["HU"],
              },
            },
          ],
          "track-count": 16,
          media: [
            {
              position: 1,
              track: [
                {
                  id: "796acf85-57f7-367b-bc16-b2eada94a4d6",
                  number: "6",
                  title: "Test",
                  length: 297866,
                },
              ],
              "track-count": 16,
              "track-offset": 5,
            },
          ],
        },
      ],
    },
    {
      id: "031a4d01-8aa0-4897-a34a-a38fb2bc94c2",
      score: 87,
      title: "Test",
      length: 269173,
      video: null,
      "artist-credit": [
        {
          name: "Ákos",
          artist: {
            id: "b8696047-080a-4e24-9901-238aa87717d0",
            name: "Ákos",
            "sort-name": "Ákos",
            aliases: [
              {
                "sort-name": "Akosh",
                name: "Akosh",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "Ákos, Kovács",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                name: "Kovács Ákos",
                locale: null,
                type: "Legal name",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "1999",
      releases: [
        {
          id: "cdac5336-29e3-4c6d-aac7-9cbb82765fef",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Ismerj fel",
          status: "Official",
          "artist-credit": [
            {
              name: "Ákos",
              artist: {
                id: "b8696047-080a-4e24-9901-238aa87717d0",
                name: "Ákos",
                "sort-name": "Ákos",
              },
            },
          ],
          "release-group": {
            id: "cd4c6c85-97e5-3b99-a43c-343d335297ce",
            "type-id": "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Ismerj fel",
            "primary-type": "Album",
            "secondary-types": ["Compilation"],
            "secondary-type-ids": ["dd2a21e1-0c00-3729-a7a0-de60b84eb5d1"],
          },
          date: "1999",
          country: "HU",
          "release-events": [
            {
              date: "1999",
              area: {
                id: "312bc5bb-7e43-3e63-81c6-b4d712b37b2c",
                name: "Hungary",
                "sort-name": "Hungary",
                "iso-3166-1-codes": ["HU"],
              },
            },
          ],
          "track-count": 16,
          media: [
            {
              position: 1,
              track: [
                {
                  id: "89442f59-4499-3fc2-a0b0-429e245c1a9d",
                  number: "4",
                  title: "Test",
                  length: 269173,
                },
              ],
              "track-count": 16,
              "track-offset": 3,
            },
          ],
        },
      ],
      tags: [{ count: 1, name: "dream" }],
    },
    {
      id: "dc920251-c2d2-44e3-bbc4-774ed2fd75f6",
      score: 87,
      title: "Test",
      length: 15226,
      video: null,
      "artist-credit": [
        {
          name: "Silver Sun",
          artist: {
            id: "c76e4d1c-06ff-4594-b31c-4a93d9c1cb22",
            name: "Silver Sun",
            "sort-name": "Silver Sun",
            disambiguation: "UK band",
            aliases: [
              {
                "sort-name": "Silversun",
                name: "Silversun",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "1997",
      releases: [
        {
          id: "ccc114a8-71d3-4494-ae65-d6fb83636c45",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Silver Sun",
          status: "Official",
          "artist-credit": [
            {
              name: "Silver Sun",
              artist: {
                id: "c76e4d1c-06ff-4594-b31c-4a93d9c1cb22",
                name: "Silver Sun",
                "sort-name": "Silver Sun",
                disambiguation: "UK band",
              },
            },
          ],
          "release-group": {
            id: "47f65f6f-858c-38c7-83e1-cbf424ecfaae",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Silver Sun",
            "primary-type": "Album",
          },
          date: "1997",
          country: "GB",
          "release-events": [
            {
              date: "1997",
              area: {
                id: "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
                name: "United Kingdom",
                "sort-name": "United Kingdom",
                "iso-3166-1-codes": ["GB"],
              },
            },
          ],
          "track-count": 15,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "6fe67477-33a2-3c35-86e7-2eefbea58bf1",
                  number: "1",
                  title: "Test",
                  length: 15226,
                },
              ],
              "track-count": 15,
              "track-offset": 0,
            },
          ],
        },
      ],
      tags: [
        { count: 1, name: "rock" },
        { count: 1, name: "indie rock" },
        { count: 1, name: "power pop" },
        { count: 1, name: "britpop" },
      ],
    },
    {
      id: "4cead96d-3765-4366-8e6d-ca9513ad5fc8",
      score: 87,
      title: "Test",
      length: 17360,
      video: null,
      "artist-credit": [
        {
          name: "Bif Naked",
          artist: {
            id: "e9a639e2-3840-410a-bd6d-4e7bdb66734d",
            name: "Bif Naked",
            "sort-name": "Bif Naked",
            aliases: [
              {
                "sort-name": "Torbert, Beth",
                "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                name: "Beth Torbert",
                locale: null,
                type: "Legal name",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "Bif",
                name: "Bif",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "2003",
      releases: [
        {
          id: "befdf5ae-8204-4ddf-b0dd-c2d9809d567c",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Okenspay Ordway I. (a.k.a. Things I Forgot to Tell Mommy)",
          status: "Official",
          "artist-credit": [
            {
              name: "Bif Naked",
              artist: {
                id: "e9a639e2-3840-410a-bd6d-4e7bdb66734d",
                name: "Bif Naked",
                "sort-name": "Bif Naked",
              },
            },
          ],
          "release-group": {
            id: "54443726-0604-37c3-810c-ef0e3edbf278",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Okenspay Ordway I. (a.k.a. Things I Forgot to Tell Mommy)",
            "primary-type": "Album",
          },
          date: "2003",
          country: "CA",
          "release-events": [
            {
              date: "2003",
              area: {
                id: "71bbafaa-e825-3e15-8ca9-017dcad1748b",
                name: "Canada",
                "sort-name": "Canada",
                "iso-3166-1-codes": ["CA"],
              },
            },
          ],
          "track-count": 34,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "a26539ad-c851-3d04-8c21-afda2664576b",
                  number: "1",
                  title: "Test",
                  length: 17360,
                },
              ],
              "track-count": 34,
              "track-offset": 0,
            },
          ],
        },
      ],
    },
    {
      id: "db539cce-b0ca-474d-9332-02e75e952093",
      score: 87,
      title: "Test",
      length: 157933,
      video: null,
      "artist-credit": [
        {
          name: "Hard‐Ons",
          artist: {
            id: "f9fe87a7-f493-4d5d-9fb1-e65d171e9333",
            name: "Hard‐Ons",
            "sort-name": "Hard‐Ons",
            aliases: [
              {
                "sort-name": "The Hard Ons",
                name: "The Hard Ons",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "The Hardons",
                "type-id": "1937e404-b981-3cb7-8151-4c86ebfc8d8e",
                name: "The Hardons",
                locale: null,
                type: "Search hint",
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
              {
                "sort-name": "The Hard-Ons",
                name: "The Hard-Ons",
                locale: null,
                type: null,
                primary: null,
                "begin-date": null,
                "end-date": null,
              },
            ],
          },
        },
      ],
      "first-release-date": "1992",
      releases: [
        {
          id: "2808b869-f3c6-43f5-bbdf-8eb90404d68b",
          "status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
          count: 1,
          title: "Dateless Dudes' Club",
          status: "Official",
          "artist-credit": [
            {
              name: "Hard‐Ons",
              artist: {
                id: "f9fe87a7-f493-4d5d-9fb1-e65d171e9333",
                name: "Hard‐Ons",
                "sort-name": "Hard‐Ons",
              },
            },
          ],
          "release-group": {
            id: "94d03f11-f756-35eb-bf5a-f096f9a85e18",
            "type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
            title: "Dateless Dudes' Club",
            "primary-type": "Album",
          },
          date: "1992",
          country: "AU",
          "release-events": [
            {
              date: "1992",
              area: {
                id: "106e0bec-b638-3b37-b731-f53d507dc00e",
                name: "Australia",
                "sort-name": "Australia",
                "iso-3166-1-codes": ["AU"],
              },
            },
          ],
          "track-count": 8,
          media: [
            {
              position: 1,
              format: "CD",
              track: [
                {
                  id: "3350ff94-99fe-38ce-9a37-e97c8134e855",
                  number: "5",
                  title: "Test",
                  length: 157933,
                },
              ],
              "track-count": 8,
              "track-offset": 4,
            },
          ],
        },
      ],
    },
  ],
};
// suite
describe("Test user input", () => {
  test("Renders cards correctly when data exists", async () => {
    render(<Results fetchedData={testData} />);
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });
    const cardElement = await screen.findByText(
      /RXJs Music Searcher/i,
      { exact: false },
      { timeout: 5000, interval: 500 }
    );
    // const cardElement = await screen.findByText(
    //   /score/i,
    //   { exact: false },
    //   { timeout: 10000, interval: 1000 }
    // );
    expect(cardElement).toBeInTheDocument();
  });
});
