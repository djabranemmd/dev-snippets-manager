import toast from 'react-hot-toast'

function DataActions({
  snippets,
  importSnippets,
}) {
  const handleExport = () => {
    try {
      const dataStr = JSON.stringify(
        snippets,
        null,
        2
      )

      const blob = new Blob([dataStr], {
        type: 'application/json',
      })

      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')

      link.href = url

      link.download = 'dev-snippets-backup.json'

      link.click()

      URL.revokeObjectURL(url)

      toast.success('Snippets exported successfully')

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Export failed')
    }
  }

  const handleImport = (event) => {
    const file = event.target.files[0]

    if (!file) return

    const reader = new FileReader()

    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(
          e.target.result
        )

        if (!Array.isArray(importedData)) {
          throw new Error()
        }

        importSnippets(importedData)

        toast.success('Snippets imported successfully')

      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        toast.error('Invalid JSON file')
      }
    }

    reader.readAsText(file)
  }

  return (
    <div className="mt-8 flex flex-col gap-4 lg:flex-row">
      
      <button
        onClick={handleExport}
        className="rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900"
      >
        Export Snippets
      </button>

      <label className="cursor-pointer rounded-2xl bg-sky-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-sky-400">
        Import Snippets

        <input
          type="file"
          accept=".json"
          onChange={handleImport}
          className="hidden"
        />
      </label>

    </div>
  )
}

export default DataActions