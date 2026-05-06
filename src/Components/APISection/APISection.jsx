import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const API_KEY = import.meta.env.VITE_OZENCRM_API_KEY ?? 'sk_test_••••••••••••••••';

const codeSnippets = {
  javascript: [
    { type: 'keyword', text: 'const '          },
    { type: 'plain',   text: 'client = '       },
    { type: 'fn',      text: 'require'         },
    { type: 'plain',   text: '('               },
    { type: 'string',  text: "'ozencrm-sdk'"   },
    { type: 'plain',   text: ');\n\n'          },
    { type: 'comment', text: '// Initialize with your secret key\n' },
    { type: 'keyword', text: 'const '          },
    { type: 'plain',   text: 'api = '          },
    { type: 'keyword', text: 'new '            },
    { type: 'plain',   text: 'client.'         },
    { type: 'fn',      text: 'v2'              },
    { type: 'plain',   text: '('               },
    { type: 'string',  text: `'${API_KEY}'`    },
    { type: 'plain',   text: ');\n\n'          },
    { type: 'comment', text: '// Fetch customer pipeline data\n' },
    { type: 'keyword', text: 'await '          },
    { type: 'plain',   text: 'api.customers.'  },
    { type: 'fn',      text: 'retrieve'        },
    { type: 'plain',   text: '('               },
    { type: 'string',  text: "'cust_01928'"    },
    { type: 'plain',   text: ', {\n    expand: [' },
    { type: 'string',  text: "'deals'"         },
    { type: 'plain',   text: ', '              },
    { type: 'string',  text: "'interactions'"  },
    { type: 'plain',   text: ']\n});'          },
  ],
  python: [
    { type: 'keyword', text: 'from '           },
    { type: 'plain',   text: 'ozencrm '        },
    { type: 'keyword', text: 'import '         },
    { type: 'plain',   text: 'Client\n\n'      },
    { type: 'comment', text: '# Initialize with your secret key\n' },
    { type: 'plain',   text: 'client = '       },
    { type: 'fn',      text: 'Client'          },
    { type: 'plain',   text: '(api_key='       },
    { type: 'string',  text: `'${API_KEY}'`    },
    { type: 'plain',   text: ')\n\n'           },
    { type: 'comment', text: '# Fetch customer pipeline data\n' },
    { type: 'plain',   text: 'customer = client.customers.' },
    { type: 'fn',      text: 'retrieve'        },
    { type: 'plain',   text: '(\n    '         },
    { type: 'string',  text: "'cust_01928'"    },
    { type: 'plain',   text: ',\n    expand=[' },
    { type: 'string',  text: "'deals'"         },
    { type: 'plain',   text: ', '              },
    { type: 'string',  text: "'interactions'"  },
    { type: 'plain',   text: ']\n)'            },
  ],
  curl: [
    { type: 'fn',     text: 'curl'             },
    { type: 'plain',  text: ' -X GET \\\n  '   },
    { type: 'string', text: 'https://api.ozencrm.com/v2/customers/cust_01928' },
    { type: 'plain',  text: ' \\\n  -H '       },
    { type: 'string', text: `"Authorization: Bearer ${API_KEY}"` },
    { type: 'plain',  text: ' \\\n  -H '       },
    { type: 'string', text: '"Content-Type: application/json"' },
    { type: 'plain',  text: ' \\\n  -d '       },
    { type: 'string', text: `'{"expand": ["deals", "interactions"]}'` },
  ],
};

const rawSnippets = {
  javascript:
`const client = require('ozencrm-sdk');

// Initialize with your secret key
const api = new client.v2('${API_KEY}');

// Fetch customer pipeline data
await api.customers.retrieve('cust_01928', {
    expand: ['deals', 'interactions']
});`,
  python:
`from ozencrm import Client

# Initialize with your secret key
client = Client(api_key='${API_KEY}')

# Fetch customer pipeline data
customer = client.customers.retrieve(
    'cust_01928',
    expand=['deals', 'interactions']
)`,
  curl:
`curl -X GET \\
  https://api.ozencrm.com/v2/customers/cust_01928 \\
  -H "Authorization: Bearer ${API_KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"expand": ["deals", "interactions"]}'`,
};

const colorMap = {
  keyword: '#7c6af7',
  fn:      '#4338ca',
  string:  '#059669',
  comment: '#94a3b8',
  plain:   '#1e293b',
};

const LANGS = ['javascript', 'python', 'curl'];

const APISection = () => {
  const [activeTab, setActiveTab] = useState('javascript');
  const [copied, setCopied]       = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(rawSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-24 bg-[#f8fafc]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full mb-5">
            Developer First
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Powerful APIs for Seamless Integration
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Built by developers, for developers. Extend OzenCRM to fit your stack perfectly.
          </p>
        </div>

        {/* Code card — centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">

            {/* Window chrome */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[11px] font-mono font-semibold text-slate-400 tracking-wider uppercase">
                GET_CUSTOMER_DATA.js
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 hover:text-slate-700 transition-colors"
              >
                {copied
                  ? <><Check className="w-3.5 h-3.5 text-emerald-500" /><span className="text-emerald-500">Copied</span></>
                  : <><Copy className="w-3.5 h-3.5" /><span>Copy</span></>
                }
              </button>
            </div>

            {/* Language tabs */}
            <div className="flex items-center border-b border-slate-100 bg-slate-50 px-5">
              {LANGS.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={`
                    px-4 py-2.5 text-[12px] font-semibold capitalize transition-all duration-150 border-b-2
                    ${activeTab === lang
                      ? 'border-[#4338ca] text-[#4338ca] bg-white'
                      : 'border-transparent text-slate-400 hover:text-slate-600'
                    }
                  `}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Code body */}
            <div className="px-6 py-6 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap">
                {codeSnippets[activeTab].map((token, i) => (
                  <span key={i} style={{ color: colorMap[token.type] }}>
                    {token.text}
                  </span>
                ))}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default APISection;
